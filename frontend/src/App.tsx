import { CategoryStrip } from './components/CategoryStrip';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryStrip />
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
