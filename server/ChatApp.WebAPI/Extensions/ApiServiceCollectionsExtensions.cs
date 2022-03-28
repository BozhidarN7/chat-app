﻿using Microsoft.EntityFrameworkCore;
using ChatApp.Infrastructure.Data;
using ChatApp.Infrastructure.Data.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using ChatApp.Core.Contracts;
using ChatApp.Core.Services;
using ChatApp.Infrastructure.Data.Repositories;

namespace ChatApp.WebAPI.Extensions
{
    public static class ApiServiceCollectionsExtensions
    {
        public static IServiceCollection AddApiServices(this IServiceCollection services)
        {
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            services.AddScoped<IApplicationDbRepository, ApplicationDbRepository>();
            services.AddScoped<IUserService, UserService>();

            return services;
        }
        public static IServiceCollection AddApiDbContexts(this IServiceCollection services, IConfiguration config)
        {
            var connectionString = config.GetConnectionString("OfficeConnection");
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString));

            return services;
        }

        public static IServiceCollection AddApiIdentity(this IServiceCollection services)
        {
            services.AddIdentityCore<ApplicationUser>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = true;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.User.RequireUniqueEmail = true;
            })
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();
            //.AddTokenProvider<DataProtectorTokenProvider<ApplicationUser>>(TokenOptions.DefaultProvider);

            return services;
        }

        public static IServiceCollection AddJwt(this IServiceCollection services, IConfiguration config)
        {
            IConfigurationSection jwtSettings = config.GetSection("JwtSettings");

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = jwtSettings.GetSection("Issuer").Value,
                        ValidAudience = jwtSettings.GetSection("Audience").Value,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.GetSection("Key").Value))
                    };
                });
            return services;
        }

        public static IServiceCollection AddCorsPolicies(this IServiceCollection services, IConfiguration config)
        {
            IConfigurationSection cors = config.GetSection("CorsOrigins");
            services.AddCors(options =>
            {
                options.AddPolicy(cors.GetSection("Allowed").Value, builder =>
                {
                    builder.WithOrigins("http://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
                });
            });

            return services;
        }
    }
}
