import Link from 'next/link';

const MyLink = (props) => (
  <Link href={props.href}>
    <a className={`${props.styles} hover:border-my-85be28 border-b-2 border-transparent`}>{props.linkText}</a>
  </Link>
);

const Nav = () => {
  return (
    <nav>
      <MyLink href="/graduation" linkText="Выпускные" styles="mx-6" />
      <MyLink href="/about-us" linkText="О нас" styles="mx-6" />
      <MyLink href="/services" linkText="Услуги" styles="mx-6" />
      <MyLink href="/among-us" linkText="Among Us" styles="mx-6" />
      <MyLink href="/team" linkText="Команда" styles="mx-6" />
      <MyLink href="/reviews" linkText="Отзывы" styles="" />
    </nav>
  );
};

export default Nav;
