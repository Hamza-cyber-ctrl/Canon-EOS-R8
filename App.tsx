import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import Rose from '@/pages/Rose';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

// Make a safe accessor for BASE_URL to avoid the type error
const baseUrl =
  (typeof import.meta !== 'undefined' &&
    typeof (import.meta as any).env !== 'undefined' &&
    typeof (import.meta as any).env.BASE_URL === 'string'
      ? (import.meta as any).env.BASE_URL
      : '/'
  ).replace(/\/$/, '');

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/rose" component={Rose} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={baseUrl}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
