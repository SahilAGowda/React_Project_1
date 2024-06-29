import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BenefitList } from "./benefit/BenefitList";
import { BenefitCreate } from "./benefit/BenefitCreate";
import { BenefitEdit } from "./benefit/BenefitEdit";
import { BenefitShow } from "./benefit/BenefitShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { ApplicationStepList } from "./applicationStep/ApplicationStepList";
import { ApplicationStepCreate } from "./applicationStep/ApplicationStepCreate";
import { ApplicationStepEdit } from "./applicationStep/ApplicationStepEdit";
import { ApplicationStepShow } from "./applicationStep/ApplicationStepShow";
import { SuccessStoryList } from "./successStory/SuccessStoryList";
import { SuccessStoryCreate } from "./successStory/SuccessStoryCreate";
import { SuccessStoryEdit } from "./successStory/SuccessStoryEdit";
import { SuccessStoryShow } from "./successStory/SuccessStoryShow";
import { BlogPostList } from "./blogPost/BlogPostList";
import { BlogPostCreate } from "./blogPost/BlogPostCreate";
import { BlogPostEdit } from "./blogPost/BlogPostEdit";
import { BlogPostShow } from "./blogPost/BlogPostShow";
import { IndustryPartnershipList } from "./industryPartnership/IndustryPartnershipList";
import { IndustryPartnershipCreate } from "./industryPartnership/IndustryPartnershipCreate";
import { IndustryPartnershipEdit } from "./industryPartnership/IndustryPartnershipEdit";
import { IndustryPartnershipShow } from "./industryPartnership/IndustryPartnershipShow";
import { ServiceList } from "./service/ServiceList";
import { ServiceCreate } from "./service/ServiceCreate";
import { ServiceEdit } from "./service/ServiceEdit";
import { ServiceShow } from "./service/ServiceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CareerLaunchPro"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Benefit"
          list={BenefitList}
          edit={BenefitEdit}
          create={BenefitCreate}
          show={BenefitShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="ApplicationStep"
          list={ApplicationStepList}
          edit={ApplicationStepEdit}
          create={ApplicationStepCreate}
          show={ApplicationStepShow}
        />
        <Resource
          name="SuccessStory"
          list={SuccessStoryList}
          edit={SuccessStoryEdit}
          create={SuccessStoryCreate}
          show={SuccessStoryShow}
        />
        <Resource
          name="BlogPost"
          list={BlogPostList}
          edit={BlogPostEdit}
          create={BlogPostCreate}
          show={BlogPostShow}
        />
        <Resource
          name="IndustryPartnership"
          list={IndustryPartnershipList}
          edit={IndustryPartnershipEdit}
          create={IndustryPartnershipCreate}
          show={IndustryPartnershipShow}
        />
        <Resource
          name="Service"
          list={ServiceList}
          edit={ServiceEdit}
          create={ServiceCreate}
          show={ServiceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
