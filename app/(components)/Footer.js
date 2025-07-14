export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {year} Pesona Solok Selatan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
