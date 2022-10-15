import { ErrorMessage, Field, Form, Formik } from "formik";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <FooterComponent />
    </>
  );
}

// head component
function HeaderComponent() {
  return (
    <div className={styles.headContainer}>
      <MetaHead />
      {/* navbar */}
      {/* <NavBar /> */}
      <nav className={styles.nav}>
        {/* logo */}
        {/* <Logo /> */}
        <div className={styles.logo}>
          <Image
            src={"/assets/openauto.svg"}
            alt="Open Auto"
            width={250}
            height={40}
          ></Image>
        </div>
        {/* menu */}
        {/* <Menu /> */}
        <div className={styles.menu}>
          <span>+769 586 4558</span>
          <span>service@openauto.ca</span>
          <button className={styles.outlinedButton}>
            Download the mobile app
          </button>
        </div>
      </nav>
      {/* hero section */}
      {/* <Hero /> */}
      <div className={styles.hero}>
        {/* <FormComponent /> */}
        <div className={styles.formComponent}>
          <h1>Vehicle Maintenance From The Comfort of Your Home</h1>
          <p>
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free.
          </p>
          {/* <CustomForm /> */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
        {/* <HeroImageComponent /> */}
        <div className={styles.imageComp}>
          <img
            className={styles.image}
            src={"/assets/Pickup_Illustration.png"}
            alt={"Hero Image"}
          />
        </div>
      </div>
      {/* icon section */}
      {/* <IconComponent /> */}
      <div className={styles.icons}>
        <p>insta</p>
        <p>facebook</p>
      </div>
    </div>
  );
}

// icon section
function IconComponent() {
  return <></>;
}

// left hero component
function FormComponent() {
  return (
    <div className={styles.formComponent}>
      <h1>Vehicle Maintenance From The Comfort of Your Home</h1>
      <p>
        Open Auto Soothes the hassle of maintaining your vehicle and helps you
        deal with unexpected repairs worry-free.
      </p>
      <CustomForm />
    </div>
  );
}

// right hero component
function HeroImageComponent() {
  return (
    <div className={styles.image}>
      <Image
        src={"/assets/Pickup_Illustration.png"}
        layout={"fill"}
        alt={"Hero Image"}
      />
    </div>
  );
}

// hero section
function Hero() {
  return (
    <div className={styles.hero}>
      <FormComponent />
      <HeroImageComponent />
    </div>
  );
}

// formik component
function CustomForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

// footer component
function FooterComponent() {
  return (
    <div className={styles.footContainer}>
      <h1>Hello</h1>
    </div>
  );
}

// nav component
function NavBar() {
  return (
    <nav className={styles.nav}>
      {/* logo */}
      <Logo />
      {/* menu */}
      <Menu />
    </nav>
  );
}

// logo component
function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src={"/assets/openauto.svg"}
        alt="Open Auto"
        width={250}
        height={40}
      ></Image>
    </div>
  );
}

// menu component
function Menu() {
  return (
    <div className={styles.menu}>
      <span>+769 586 4558</span>
      <span>service@openauto.ca</span>
      <button className={styles.outlinedButton}>Download the mobile app</button>
    </div>
  );
}

// meta head section
function MetaHead() {
  return (
    <Head>
      <title>Open Auto</title>
      <meta
        name="description"
        content="Vehicle Maintenance at the convenience of your phone. Book your car repairs, maintenance, and towing right through our OpenAuto Platform"
      />
      <meta
        name="keywords"
        content="openauto,open auto,car repair,vehicle maintenance,car towing,fleet management platform, car mainenance management,vehicle repair,mechanical repair, repair my car, fix my car, vehicle repair app"
      />
      <meta name="author" content="OpenAuto" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
