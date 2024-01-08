import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import {Head} from "next/document"; // or `v14-pages` if you are using Next.js v14

export default function MyApp(props) {
  return (
    <AppCacheProvider {...props}>
      <Head>
      
      </Head>
    </AppCacheProvider>
    
  );
}

