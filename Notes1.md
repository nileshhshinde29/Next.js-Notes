# rendering
It transforms your code into user Interfaces.

# Client-side rendering
- In CSR component code is transformed into a user Interface directly withing browser.

# Server side rendering
- In SSR code is rendered at server side, and this pre-rendered code send to client.
- use: increases SEO of website.
       Minimize initial page loading.
  e.g : User searched for something on internet then,
        -if rendering is at client side then data is not available at initial page load because of api fetching. because of that browser bot is not rank website.
        - other hand in SSR its pre-rendered so bot have much data to scan and rank. SSR is very useful for blog, e-comers websites

 # # Static side Generating 
- SSG creates HTML once at build time and serves that static HTML to users. 
- This results in faster load times and improved performance because the pages are pre-rendered and cached.
- e.g getStaticProps.



 # Hydration       
 - Hydration is process of transforming pre-rendered server-side content into and User interface on client side.
 - once HTML is delivered to browser next js hydrates this by attaching event listeners and other interactive features to content. this make content dynamic and interactive.
   use: 
        - Faster Time to Interactive (TTI):
        - Improved SEO: 
        - Better user experience

# getServerSideProps : // may be deprecated in 14
- used to fetch data on server side on each request.
- Can be used for dynamic data that needs to be up-to-date on every request.

# getStaticProps:  // may be deprecated in 14
- Runs at build time.
- The generated page is served as static HTML.
- You can use the revalidate key to specify a time interval for revalidation, allowing the page to be updated with fresh data periodically.


```jsx 
// pages/example.js

export async function getServerSideProps(context) {
  // Fetch data from an API or database
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}

export async function getStaticProps() {
  // Fetch data from an API or database
  const res = await fetch('https://api.example.com/static-data');
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      data,
    },
    // Optionally revalidate the page at intervals
    revalidate: 10, // in seconds
  };
}


const ExamplePage = ({ data }) => {
  return (
    <div>
      <h1>Server-Side Rendered Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExamplePage;
```

# Streaming 
- you don`t have to fetch everything before you can shows anything.
- Streaming allows you to stream parts of pre-rendered content to client side as soon as it available, rather than waiting fro entire page to be rendered. 

# Suspense
- which allows you to handle loading states for data-fetching and code-splitting more gracefully.
- With Suspense, you can show fallback content while waiting for a component or data to be ready.

# client component.
- client component have access to the client environment.
- use state, effect, also access browser apis eg localStorage
- They can also be rendered on the server for a fast initial load of the site.

# server components
- Designed to operate on the server.
- unlike client component. their code stays on the server and is never downloaded to the client.
- can increase security by keeping sensitive data to server side like token

# Catching in server components.
- when render server side component in UI, it stores fetched data in cache.
- after we reload then it will get data from the cache.
- it minimize amount of rerendering and data fetching for each request. 

# Prefetching:
- Prefetching is a technique used to preload a route in the background before the
  user navigates to it. 
- Routes are automatically prefetched as they become visible in the user's viewport,
  either when the page first loads or as it comes into view through scrolling

# Dynamic Rendering
- Dynamic rendering is a server rendering strategy where routes are rendered for each user at request time
- It is useful when a route has data that is personalized to the user or contains information that can only be known at request time, such as cookies or the URL's search parameters
- In Next.js, these dynamic functions are: cookies(), headers(), and searchParams

- As a developer, you do not need to choose between static and dynamic rendering.
Next.js will automatically choose the best rendering strategy for each route based
on the features and APIs used
