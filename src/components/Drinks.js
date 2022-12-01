import Header from './Header';
import Footer from './Footer';
import BodyRecipes from './BodyRecipes';

export default function Drinks() {
  return (
    <div>
      <Header titlePage="Drinks" buttonSearch />
      <BodyRecipes title="Drinks" />
      <Footer />
    </div>
  );
}
