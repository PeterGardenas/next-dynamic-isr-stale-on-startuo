/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return new Date().toISOString();
}

export const revalidate = 3600;
export const generateStaticParams = () => [{ isr: "foo" }];
