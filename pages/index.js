import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nishreen's Birthday</title>
        <link rel="icon" href="/iii.png" />
      </Head>

      <main>
        <h1 className="title">
          Happy Birthday Big!
        </h1>

        <p className="description">
          Hope you have a great year ahead 🎉
        </p>

        <div className="pics">
          <img className="margin-baloon" src="/iii.png" />
          <img className="big" src="/pic.jpeg" />
          <img className="margin-baloon" src="/iii.png" />

        </div>


      </main>

      <footer>
        Made with ❤️ in Vancouver
      </footer>

      <style jsx>{`
        .container {
          height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(150deg, #53ed6a 15%, #05d5ff 50%, #a6ffcb );
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .pics {
          display: flex;
          justify-content: space-between;
        }

        .margin-baloon {
          width: 450px;
          height: 400px;
        }

        .big {
          height: 400px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Roboto Mono;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
