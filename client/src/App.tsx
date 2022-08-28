import { MantineProvider } from '@mantine/core';
import Layout from '_components/layout/Layout';
import { themeOverride } from '_styles/theme';
import HomeView from '_views/HomeView';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { employeesApi } from '_api/employees.api';

function App() {

  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS theme={themeOverride} >
        <ApiProvider api={employeesApi}>
          <Layout>
            <HomeView />
          </Layout>
        </ApiProvider>
      </MantineProvider>
    </div>
  )
}

export default App
