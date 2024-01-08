import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'; // or `v14-appRouter` if you are using Next.js v14

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
      <AppRouterCacheProvider options={{ enableCssLayer: true }} children={</>}>

      </body>
      </html>
  );
}