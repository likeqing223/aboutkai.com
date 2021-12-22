import Container from "components/Container";

export default function Custom404() {
  return (
    <Container>
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h1 className="mb-8">404 - Page Not Found</h1>
        <p className="text-gray-700 dark:text-gray-500">
          这里本来有什么？或者什么也没有。
        </p>
      </div>
    </Container>
  );
}
