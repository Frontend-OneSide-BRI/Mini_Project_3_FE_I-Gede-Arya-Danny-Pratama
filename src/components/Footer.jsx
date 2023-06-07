function Footer() {
  return (
    <div className="container py-10 text-zinc-500">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col items-start gap-3">
          <button>Original Series</button>
          <button>Apple TV</button>
          <button>HBO</button>
          <button>Netflix</button>
        </div>
        <div className="flex flex-col items-start gap-3">
          <button>Category</button>
          <button>Horror</button>
          <button>Comedy</button>
        </div>
        <div className="flex flex-col items-start gap-3">
          <button>Year</button>
          <button>2022</button>
          <button>2023</button>
        </div>
        <div className="flex flex-col items-start gap-3">
          <button>About us</button>
          <button>Contact us</button>
          <button>Terms of Use</button>
          <button>Gift Cards</button>
        </div>
      </div>
      <div className="mt-8">
        Made with ❤️ Copyright © 2023 by Arya. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
