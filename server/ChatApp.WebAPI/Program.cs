using ChatApp.WebAPI.Extensions;
using ChatApp.WebAPI.Hubs;
using ChatApp.WebAPI.ModelBinders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddApiDbContexts(builder.Configuration);
builder.Services.AddMongoClient();
builder.Services.AddApiIdentity();
builder.Services.AddJwt(builder.Configuration);
builder.Services.AddCorsPolicies(builder.Configuration);
builder.Services.AddApiServices();
builder.Services.AddControllers(options =>
{
    options.ModelBinderProviders.Insert(0, new QueryStringModelBinderProvider());
});
builder.Services.AddSignalR();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));    
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(builder.Configuration.GetSection("CorsOrigins:Allowed").Value);


app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();


app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<ChatHub>("/api/v1/chat");
});

app.MapControllers();

app.Run();
