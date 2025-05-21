export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        {/*TODO: Please remove script if not needed */}
        {/* IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! */}
        <script
          src="https://cdn.gpteng.co/gptengineer.js"
          type="module"
        ></script>
      </body>
    </html>
  );
}
