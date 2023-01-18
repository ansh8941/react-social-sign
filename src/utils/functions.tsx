export const loadExternalScript = (id: string, src: string, initialize: () => void) => {
  const element = document.getElementsByTagName('script')[0];
  const fjs = element;
  let script = element;
  if (document.getElementById(id)) {
    return;
  }
  script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.onload = initialize;
  script.async = true;
  fjs?.parentNode?.insertBefore(script, fjs);
};
