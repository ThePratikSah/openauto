import { useFormik } from "formik";
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
          <div className={styles.phone}>
            <img
              className={styles.phoneIcon}
              src={"/assets/icons/Phone.svg"}
              alt="Open Auto"
            />
            <span>+769 586 4558</span>
          </div>
          <div className={styles.email}>
            <img
              className={styles.emailIcon}
              src={"/assets/icons/email.svg"}
              alt="Open Auto"
            />
            <span>service@openauto.ca</span>
          </div>

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
          <CustomForm />
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
        <div className={styles.iconContainer}>
          <img className={styles.icon} src="/assets/icons/fb.svg" alt="fb" />
          <img className={styles.icon} src="/assets/icons/ig.svg" alt="fb" />
          <img className={styles.icon} src="/assets/icons/in.svg" alt="fb" />
          <img className={styles.icon} src="/assets/icons/yt.svg" alt="fb" />
          <img className={styles.icon} src="/assets/icons/tw.svg" alt="fb" />
        </div>
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

// form validation
function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 20) {
    errors.name = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

// handle post request
async function handlePost(values, resetForm) {
  const res = await fetch("/api/form", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: values, // body data type must match "Content-Type" header
  });

  const data = await res.json();

  if (res.status === 201) {
    alert("Form submited");
    resetForm({ values: "" });
  }
}

// formik component
function CustomForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      handlePost(JSON.stringify(values, null, 2), resetForm);
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <input
        placeholder="Enter your name"
        className={styles.input}
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <input
        placeholder="Enter your email"
        className={styles.input}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button className={styles.submitText} type="submit">
        Submit
      </button>
    </form>
  );
}

// footer component
function FooterComponent() {
  return (
    <div className={styles.footContainer}>
      <div className={styles.topComponent}>
        <div className={styles.leftComp}>
          <img className={styles.phoneImage} src="/assets/pickup_service.png" alt="Pickup Service" />
        </div>
        <div className={styles.rightComp}>
          <div className={styles.rightCompChild}>
            <h1 className={styles.focusedText}>Focused on <br/> Time Saving</h1>
            <p className={styles.paraText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              impedit amet nostrum similique asperiores, labore suscipit
              laudantium aperiam dolores totam earum magni ipsa ad sunt culpa
              minima possimus quaerat temporibus?
              impedit nostrum similique asperiores, labore suscipit
              laudantium aperiam dolores totam earum magni ipsa ad sunt culpa
            </p>
            <button className={styles.downloadButton}>Download the mobile app</button>
          </div>
        </div>
        <div className={styles.rightComponent}></div>
      </div>
      <div className={styles.bottomComponent}>
        <div className={styles.navCompFooter}>
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
              <div className={styles.phone}>
                <img
                  className={styles.phoneIcon}
                  src={"/assets/icons/Phone.svg"}
                  alt="Open Auto"
                />
                <span>+769 586 4558</span>
              </div>
              <div className={styles.email}>
                <img
                  className={styles.emailIcon}
                  src={"/assets/icons/email.svg"}
                  alt="Open Auto"
                />
                <span>service@openauto.ca</span>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.iconComponentFooter}>
          <div className="copyright">
            <p>Open Auto @ all rights reserved</p>
          </div>
          <div className="iconFooter">
            <div className={styles.icons}>
              <div className={styles.iconContainer}>
                <img
                  className={styles.icon}
                  src="/assets/icons/fb.svg"
                  alt="fb"
                />
                <img
                  className={styles.icon}
                  src="/assets/icons/ig.svg"
                  alt="fb"
                />
                <img
                  className={styles.icon}
                  src="/assets/icons/in.svg"
                  alt="fb"
                />
                <img
                  className={styles.icon}
                  src="/assets/icons/yt.svg"
                  alt="fb"
                />
                <img
                  className={styles.icon}
                  src="/assets/icons/tw.svg"
                  alt="fb"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
