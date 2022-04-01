using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace ChatApp.WebAPI.ModelBinders
{
    public class QueryStringModelBinderProvider : IModelBinderProvider
    {
        public IModelBinder? GetBinder(ModelBinderProviderContext context)
        {

            if (context.Metadata.ModelType == typeof(bool) &&
                context.BindingInfo.BindingSource != null &&
                context.BindingInfo.BindingSource.CanAcceptDataFrom(BindingSource.Query))
            {
                return new QueryStringModelBinder();
            }

            return null;
        }
    }
}
