import Navigation from '@/components/Navigation';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
}
