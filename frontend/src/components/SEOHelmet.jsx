import { Helmet } from "react-helmet-async";

export default function SEOHelmet() {
  return (
    <Helmet>
      <title>Godsdle</title>
      <meta
        name="description"
        content="Test your Greek and Norse mythology knowledge! Godsdle is a daily puzzle game where you guess the God or Goddess based on their attributes. New challenge every day!"
      />
      <meta
        name="keywords"
        content="Godsdle, Greek gods, Norse gods, mythology game, daily puzzle, wordle, Greek mythology, Norse mythology, guessing game, educational game"
      />
      <meta name="author" content="Godsdle" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Godsdle - Guess the God Daily Game" />
      <meta
        property="og:description"
        content="Test your Greek and Norse mythology knowledge! Godsdle is a daily puzzle game where you guess the God or Goddess based on their attributes. New challenge every day!"
      />
      <meta property="og:site_name" content="Godsdle" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Godsdle - Guess the God Daily Game" />
      <meta
        name="twitter:description"
        content="Test your Greek and Norse mythology knowledge! Godsdle is a daily puzzle game where you guess the God or Goddess based on their attributes. New challenge every day!"
      />

      {/* Additional SEO */}
      <meta name="theme-color" content="#1a1a1a" />
      <link rel="canonical" href={window.location.href} />

      <meta property="og:site_name" content="Godsdle" />
    </Helmet>
  );
}
