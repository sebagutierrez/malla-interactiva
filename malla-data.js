const MALLA_DATA = {
  courses: [
    {
      id: "Qu\u00edmica General I",
      semester: 1,
    },
    {
      id: "Matem\u00e1ticas I",
      semester: 1,
    },
    {
      id: "Biolog\u00eda Celular I",
      semester: 1,
    },
    {
      id: "Ingl\u00e9s I",
      semester: 1,
    },
    {
      id: "Introducci\u00f3n a la Farmacia",
      semester: 1,
    },
    {
      id: "Qu\u00edmica General II",
      semester: 2,
    },
    {
      id: "Matem\u00e1ticas II",
      semester: 2,
    },
    {
      id: "F\u00edsica",
      semester: 2,
    },
    {
      id: "Morfolog\u00eda",
      semester: 2,
    },
    {
      id: "Ingl\u00e9s II",
      semester: 2,
    },
    {
      id: "Qu\u00edmica Org\u00e1nica I",
      semester: 3,
    },
    {
      id: "F\u00edsico Qu\u00edmica I",
      semester: 3,
    },
    {
      id: "Bioestad\u00edstica",
      semester: 3,
    },
    {
      id: "Fisiolog\u00eda",
      semester: 3,
    },
    {
      id: "Ingl\u00e9s III",
      semester: 3,
    },
    {
      id: "Qu\u00edmica Org\u00e1nica II",
      semester: 4,
    },
    {
      id: "F\u00edsico Qu\u00edmica II",
      semester: 4,
    },
    {
      id: "Qu\u00edmica Anal\u00edtica",
      semester: 4,
    },
    {
      id: "Fisiopatolog\u00eda",
      semester: 4,
    },
    {
      id: "Ingl\u00e9s IV",
      semester: 4,
    },
    {
      id: "Bioqu\u00edmica",
      semester: 5,
    },
    {
      id: "Bot\u00e1nica y Fitoterapia",
      semester: 5,
    },
    {
      id: "Farmacodinamia",
      semester: 5,
    },
    {
      id: "An\u00e1lisis Instrumental",
      semester: 5,
    },
    {
      id: "Econom\u00eda",
      semester: 5,
    },
    {
      id: "F\u00e1rmaco Qu\u00edmica I",
      semester: 6,
    },
    {
      id: "Farmacolog\u00eda I",
      semester: 6,
    },
    {
      id: "Microbiolog\u00eda e Inmunolog\u00eda",
      semester: 6,
    },
    {
      id: "Bioqu\u00edmica Cl\u00ednica",
      semester: 6,
    },
    {
      id: "Legislaci\u00f3n Farmac\u00e9utica",
      semester: 6,
    },
    {
      id: "Gesti\u00f3n Farmac\u00e9utica",
      semester: 6,
    },
    {
      id: "F\u00e1rmaco Qu\u00edmica II",
      semester: 7,
    },
    {
      id: "Farmacolog\u00eda II",
      semester: 7,
    },
    {
      id: "Toxicolog\u00eda",
      semester: 7,
    },
    {
      id: "Salud P\u00fablica",
      semester: 7,
    },
    {
      id: "Biofarmacia y Farmacocin\u00e9tica",
      semester: 7,
    },
    {
      id: "\u00c9tica",
      semester: 7,
    },
    {
      id: "Tecnolog\u00eda Farmac\u00e9utica I",
      semester: 8,
    },
    {
      id: "Farmacia Asistencial",
      semester: 8,
    },
    {
      id: "Qu\u00edmica de Alimentos",
      semester: 8,
    },
    {
      id: "Nutrici\u00f3n",
      semester: 8,
    },
    {
      id: "Asignatura Sello I",
      semester: 4,
    },
    {
      id: "Asignatura Sello II",
      semester: 6,
    },
    {
      id: "Asignatura Sello III",
      semester: 7,
    },
    {
      id: "Electivo I",
      semester: 8,
    },
    {
      id: "Electivo II",
      semester: 8,
    },
    {
      id: "Tecnolog\u00eda Farmac\u00e9utica II",
      semester: 9,
    },
    {
      id: "Tecnolog\u00eda Cosm\u00e9tica",
      semester: 9,
    },
    {
      id: "Unidad de Investigaci\u00f3n",
      semester: 9,
    },
    {
      id: "Farmacia Cl\u00ednica",
      semester: 9,
    },
    {
      id: "Electivo III",
      semester: 9,
    },
    {
      id: "Internado en Farmacia Cl\u00ednica",
      semester: 10,
    },
    {
      id: "Pr\u00e1ctica Prolongada",
      semester: 10,
    },
    {
      id: "Pr\u00e1ctica Obligatoria en Farmacia Comunitaria",
      semester: 10,
    },
    {
      id: "Seminario de T\u00edtulo",
      semester: 10,
    },
  ],
  links: [
    {
      from: "Qu\u00edmica General I",
      to: "Qu\u00edmica General II",
    },
    {
      from: "Matem\u00e1ticas I",
      to: "Matem\u00e1ticas II",
    },
    {
      from: "Matem\u00e1ticas I",
      to: "F\u00edsica",
    },
    {
      from: "Biolog\u00eda Celular I",
      to: "Morfolog\u00eda",
    },
    {
      from: "Ingl\u00e9s I",
      to: "Ingl\u00e9s II",
    },
    {
      from: "Qu\u00edmica General II",
      to: "Qu\u00edmica Org\u00e1nica I",
    },
    {
      from: "Qu\u00edmica General II",
      to: "F\u00edsico Qu\u00edmica I",
    },
    {
      from: "Matem\u00e1ticas II",
      to: "F\u00edsico Qu\u00edmica I",
    },
    {
      from: "Matem\u00e1ticas II",
      to: "Bioestad\u00edstica",
    },
    {
      from: "Morfolog\u00eda",
      to: "Fisiolog\u00eda",
    },
    {
      from: "Ingl\u00e9s II",
      to: "Ingl\u00e9s III",
    },
    {
      from: "Qu\u00edmica Org\u00e1nica I",
      to: "Qu\u00edmica Org\u00e1nica II",
    },
    {
      from: "F\u00edsico Qu\u00edmica I",
      to: "F\u00edsico Qu\u00edmica II",
    },
    {
      from: "Qu\u00edmica General II",
      to: "Qu\u00edmica Anal\u00edtica",
    },
    {
      from: "Fisiolog\u00eda",
      to: "Fisiopatolog\u00eda",
    },
    {
      from: "Ingl\u00e9s III",
      to: "Ingl\u00e9s IV",
    },
    {
      from: "Qu\u00edmica Org\u00e1nica II",
      to: "Bioqu\u00edmica",
    },
    {
      from: "F\u00edsico Qu\u00edmica II",
      to: "Bioqu\u00edmica",
    },
    {
      from: "Qu\u00edmica Org\u00e1nica II",
      to: "Bot\u00e1nica y Fitoterapia",
    },
    {
      from: "Fisiopatolog\u00eda",
      to: "Farmacodinamia",
    },
    {
      from: "Qu\u00edmica Anal\u00edtica",
      to: "An\u00e1lisis Instrumental",
    },
    {
      from: "Bioestad\u00edstica",
      to: "Econom\u00eda",
    },
    {
      from: "Qu\u00edmica Org\u00e1nica II",
      to: "F\u00e1rmaco Qu\u00edmica I",
    },
    {
      from: "Farmacodinamia",
      to: "F\u00e1rmaco Qu\u00edmica I",
    },
    {
      from: "Farmacodinamia",
      to: "Farmacolog\u00eda I",
    },
    {
      from: "Bioqu\u00edmica",
      to: "Microbiolog\u00eda e Inmunolog\u00eda",
    },
    {
      from: "Fisiopatolog\u00eda",
      to: "Bioqu\u00edmica Cl\u00ednica",
    },
    {
      from: "Bioqu\u00edmica",
      to: "Bioqu\u00edmica Cl\u00ednica",
    },
    {
      from: "Ingl\u00e9s I",
      to: "Legislaci\u00f3n Farmac\u00e9utica",
    },
    {
      from: "Introducci\u00f3n a la Farmacia",
      to: "Legislaci\u00f3n Farmac\u00e9utica",
    },
    {
      from: "Matem\u00e1ticas I",
      to: "Legislaci\u00f3n Farmac\u00e9utica",
    },
    {
      from: "Qu\u00edmica General I",
      to: "Legislaci\u00f3n Farmac\u00e9utica",
    },
    {
      from: "Biolog\u00eda Celular I",
      to: "Legislaci\u00f3n Farmac\u00e9utica",
    },
    {
      from: "Econom\u00eda",
      to: "Gesti\u00f3n Farmac\u00e9utica",
    },
    {
      from: "F\u00e1rmaco Qu\u00edmica I",
      to: "F\u00e1rmaco Qu\u00edmica II",
    },
    {
      from: "Farmacolog\u00eda I",
      to: "Farmacolog\u00eda II",
    },
    {
      from: "Fisiopatolog\u00eda",
      to: "Toxicolog\u00eda",
    },
    {
      from: "Farmacodinamia",
      to: "Toxicolog\u00eda",
    },
    {
      from: "Microbiolog\u00eda e Inmunolog\u00eda",
      to: "Salud P\u00fablica",
    },
    {
      from: "Econom\u00eda",
      to: "Salud P\u00fablica",
    },
    {
      from: "Farmacolog\u00eda I",
      to: "Biofarmacia y Farmacocin\u00e9tica",
    },
    {
      from: "Legislaci\u00f3n Farmac\u00e9utica",
      to: "\u00c9tica",
    },
    {
      from: "Gesti\u00f3n Farmac\u00e9utica",
      to: "\u00c9tica",
    },
    {
      from: "Biofarmacia y Farmacocin\u00e9tica",
      to: "Tecnolog\u00eda Farmac\u00e9utica I",
    },
    {
      from: "Salud P\u00fablica",
      to: "Farmacia Asistencial",
    },
    {
      from: "Farmacolog\u00eda II",
      to: "Qu\u00edmica de Alimentos",
    },
    {
      from: "Biofarmacia y Farmacocin\u00e9tica",
      to: "Nutrici\u00f3n",
    },
    {
      from: "\u00c9tica",
      to: "Electivo II",
    },
    {
      from: "Tecnolog\u00eda Farmac\u00e9utica I",
      to: "Tecnolog\u00eda Farmac\u00e9utica II",
    },
    {
      from: "Tecnolog\u00eda Farmac\u00e9utica I",
      to: "Tecnolog\u00eda Cosm\u00e9tica",
    },
    {
      from: "Farmacolog\u00eda II",
      to: "Farmacia Cl\u00ednica",
    },
    {
      from: "Farmacia Asistencial",
      to: "Farmacia Cl\u00ednica",
    },
    {
      from: "Electivo I",
      to: "Electivo III",
    },
    {
      from: "Tecnolog\u00eda Farmac\u00e9utica II",
      to: "Internado en Farmacia Cl\u00ednica",
    },
    {
      from: "Farmacia Cl\u00ednica",
      to: "Internado en Farmacia Cl\u00ednica",
    },
    {
      from: "Unidad de Investigaci\u00f3n",
      to: "Internado en Farmacia Cl\u00ednica",
    },
    {
      from: "Tecnolog\u00eda Cosm\u00e9tica",
      to: "Internado en Farmacia Cl\u00ednica",
    },
    {
      from: "Tecnolog\u00eda Farmac\u00e9utica II",
      to: "Pr\u00e1ctica Prolongada",
    },
    {
      from: "Farmacia Cl\u00ednica",
      to: "Pr\u00e1ctica Prolongada",
    },
    {
      from: "Unidad de Investigaci\u00f3n",
      to: "Pr\u00e1ctica Prolongada",
    },
    {
      from: "Tecnolog\u00eda Cosm\u00e9tica",
      to: "Pr\u00e1ctica Prolongada",
    },
    {
      from: "Ingl\u00e9s I",
      to: "Pr\u00e1ctica Obligatoria en Farmacia Comunitaria",
    },
    {
      from: "Introducci\u00f3n a la Farmacia",
      to: "Pr\u00e1ctica Obligatoria en Farmacia Comunitaria",
    },
    {
      from: "Matem\u00e1ticas I",
      to: "Pr\u00e1ctica Obligatoria en Farmacia Comunitaria",
    },
    {
      from: "Qu\u00edmica General I",
      to: "Pr\u00e1ctica Obligatoria en Farmacia Comunitaria",
    },
    {
      from: "Biolog\u00eda Celular I",
      to: "Pr\u00e1ctica Obligatoria en Farmacia Comunitaria",
    },
    {
      from: "F\u00edsica",
      to: "Pr\u00e1ctica Obligatoria en Farmacia Comunitaria",
    },
    {
      from: "Matem\u00e1ticas II",
      to: "Pr\u00e1ctica Obligatoria en Farmacia Comunitaria",
    },
    {
      from: "Qu\u00edmica General II",
      to: "Pr\u00e1ctica Obligatoria en Farmacia Comunitaria",
    },
    {
      from: "Tecnolog\u00eda Farmac\u00e9utica II",
      to: "Seminario de T\u00edtulo",
    },
    {
      from: "Farmacia Cl\u00ednica",
      to: "Seminario de T\u00edtulo",
    },
    {
      from: "Unidad de Investigaci\u00f3n",
      to: "Seminario de T\u00edtulo",
    },
    {
      from: "Tecnolog\u00eda Cosm\u00e9tica",
      to: "Seminario de T\u00edtulo",
    },
    {
      from: "Ingl\u00e9s I",
      to: "Electivo I",
    },
    {
      from: "Introducci\u00f3n a la Farmacia",
      to: "Electivo I",
    },
    {
      from: "Matem\u00e1ticas I",
      to: "Electivo I",
    },
    {
      from: "Qu\u00edmica General I",
      to: "Electivo I",
    },
    {
      from: "Biolog\u00eda Celular I",
      to: "Electivo I",
    },
    {
      from: "F\u00edsica",
      to: "Electivo I",
    },
    {
      from: "Matem\u00e1ticas II",
      to: "Electivo I",
    },
    {
      from: "Qu\u00edmica General II",
      to: "Electivo I",
    },
    {
      from: "Asignatura Sello I",
      to: "Electivo I",
    },
    {
      from: "Morfolog\u00eda",
      to: "Electivo I",
    },
    {
      from: "Ingl\u00e9s II",
      to: "Electivo I",
    },
    {
      from: "Bioestad\u00edstica",
      to: "Electivo I",
    },
    {
      from: "Fisiolog\u00eda",
      to: "Electivo I",
    },
    {
      from: "Qu\u00edmica Org\u00e1nica I",
      to: "Electivo I",
    },
    {
      from: "F\u00edsico Qu\u00edmica I",
      to: "Electivo I",
    },
    {
      from: "Ingl\u00e9s III",
      to: "Electivo I",
    },
    {
      from: "Asignatura Sello II",
      to: "Electivo I",
    },
    {
      from: "Qu\u00edmica Org\u00e1nica II",
      to: "Electivo I",
    },
    {
      from: "Ingl\u00e9s IV",
      to: "Electivo I",
    },
    {
      from: "Qu\u00edmica Anal\u00edtica",
      to: "Electivo I",
    },
    {
      from: "Fisiopatolog\u00eda",
      to: "Electivo I",
    },
    {
      from: "Farmacodinamia",
      to: "Electivo I",
    },
    {
      from: "Econom\u00eda",
      to: "Electivo I",
    },
    {
      from: "Bot\u00e1nica y Fitoterapia",
      to: "Electivo I",
    },
    {
      from: "Bioqu\u00edmica",
      to: "Electivo I",
    },
    {
      from: "Asignatura Sello III",
      to: "Electivo I",
    },
    {
      from: "An\u00e1lisis Instrumental",
      to: "Electivo I",
    },
    {
      from: "Legislaci\u00f3n Farmac\u00e9utica",
      to: "Electivo I",
    },
    {
      from: "Gesti\u00f3n Farmac\u00e9utica",
      to: "Electivo I",
    },
    {
      from: "F\u00e1rmaco Qu\u00edmica I",
      to: "Electivo I",
    },
    {
      from: "Microbiolog\u00eda e Inmunolog\u00eda",
      to: "Electivo I",
    },
    {
      from: "Farmacolog\u00eda I",
      to: "Electivo I",
    },
    {
      from: "Bioqu\u00edmica Cl\u00ednica",
      to: "Electivo I",
    },
  ],
};
