import { css } from "@twind/core";

const styles = {
  siteTitle: css`
    text-4xl font-bold;
    text-center;
    mt-16 mb-8;
  `,
  siteDescription: css`
    text-lg font-medium;
    text-center;
    mb-8;
  `,
  features: css`
    bg-gray-100;
    py-16 px-8;

    h2 {
      text-2xl font-semibold;
      text-center;
      mb-8;
    }

    ul {
      list-style: disc inside;
      max-width: 30rem;
      margin: 0 auto;
      text-lg font-medium;

      li {
        margin: 0.5rem 0;
      }
    }
  `,
  cta: css`
    bg-gray-200;
    py-16 px-8;

    h2 {
      text-2xl font-semibold;
      text-center;
      mb-8;
    }

    a.btn {
      block py-4 px-8;
      text-lg font-semibold;
      text-center;
      text-gray-800;
      bg-blue-500;
      rounded-full;
      transition duration-200 ease-in-out;

      hover:bg-blue-600;
    }

    p {
      text-center;
      text-lg font-medium;
      mt-8;
    }

    ul.social-icons {
      display: flex;
      justify-content: center;
      list-style: none;
      margin: 1rem 0;

      li {
        margin: 0 0.5rem;

        a {
          block py-2 px-3;
          text-2xl;
          text-gray-700;
          transition duration-200 ease-in-out;

          hover:text-gray-800;
        }

        a i {
          display: block;
        }
      }
    }
  `,
};

export { styles };

