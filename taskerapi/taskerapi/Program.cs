var builder = WebApplication.CreateBuilder(args);
var AllowedOrigins = "allowedOrigins";
// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddControllers();
builder.Services.AddDbContext<DatabaseContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowedOrigins,
                      policy =>
                      {
                          policy.AllowAnyOrigin()
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
});

//builder.Services.AddScoped

builder.Services
    .AddGraphQLServer()
    .RegisterDbContextFactory<DatabaseContext>()
    .AddTypes()
    .AddProjections().AddFiltering().AddSorting();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors(AllowedOrigins);
app.UseAuthorization();

app.MapGraphQL();

app.MapStaticAssets();
app.MapRazorPages()
   .WithStaticAssets();

app.Run();
