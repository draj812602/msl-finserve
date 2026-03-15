export default function ServicesPage() {
  const products = [
    { name: "Home Loan", description: "Finance your dream home with flexible terms and competitive rates." },
    { name: "Loan Against Property", description: "Unlock the value of your property for business or personal needs." },
    { name: "Business Loan", description: "Support your business growth with tailored financing." },
    { name: "Vehicle Loan", description: "Drive away with a new vehicle through our hassle-free loans." },
  ];

  return (
    <div className="container max-w-3xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight">Products</h1>
      <p className="mt-2 text-muted-foreground">
        A wide range of loan options to meet your financial goals.
      </p>

      <div className="mt-10 space-y-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="mt-2 text-muted-foreground text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
