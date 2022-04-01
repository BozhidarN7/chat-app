using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace ChatApp.WebAPI.ModelBinders
{
    public class QueryStringModelBinder : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            if (bindingContext == null)
            {
                throw new ArgumentNullException(nameof(bindingContext));
            }
            var modelName = bindingContext.ModelName;
            var model = string.Empty;
            if (bindingContext.ValueProvider.GetValue(modelName).FirstOrDefault() != null)
            {
                model = bindingContext.ValueProvider.GetValue(modelName).FirstOrDefault().Replace("\"","");
            }
            else
            {
                //set the default value.
                model = "";
            }

            bindingContext.Result = ModelBindingResult.Success(model);
            return Task.CompletedTask;
        }
    }
}

