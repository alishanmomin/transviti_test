export default function PageShell({ children }) {
  return (
    <main className="mx-auto w-full container px-4 sm:px-6 lg:px-8 py-6 my-6!">
      {children}
    </main>
  );
}
