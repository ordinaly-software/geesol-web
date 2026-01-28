export const mapServiceSlugToPath = (slug?: string) => {
  if (!slug) return "";
  if (slug === "autoconsumo-domestico") return "placas-solares-para-casa";
  if (slug === "casos-de-exito") return "casos-de-exito";
  return slug;
};

export const getServicePath = (slug?: string) => `/${mapServiceSlugToPath(slug)}`;
