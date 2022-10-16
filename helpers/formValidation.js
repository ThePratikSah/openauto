// form validation
export function validate(values) {
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

export async function handlePost(values, resetForm) {
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
  } else {
    alert(data.message)
  }
}