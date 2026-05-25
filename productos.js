const catalogo = {
    desinfectantes: [
        {
            grupo: "Clorizide",
            marca: "Spin",
            descripcion: "Cloro estabilizado al 91%. Ideal para mantener el agua cristalina y libre de bacterias por más tiempo.",
            imagenPrincipal: "CLORIZIDE-91.png",
            variantes: [
                { 
                    subtitulo: "Grano", 
                    imagen: "CLORIZIDE-91.png",
                    pesos: ["1.25 Kg", "4.5 Kg", "11.5 Kg", "21 Kg"] 
                },
                { 
                    subtitulo: "Tableta", 
                    imagen: "CLORIZIDE-91.png",
                    pesos: ["1.8 Kg", "4 Kg", "11Kg"] 
                }
            ]
        },
        {
            grupo: "Trizide",
            marca: "Spin",
            descripcion: "Triple acción: desinfectante, algicida y clarificante en un solo producto para un mantenimiento simplificado.",
            imagenPrincipal: "TRIZIDE.png",
            variantes: [
                { 
                    subtitulo: "Trizide 65% Grano", 
                    imagen: "TRIZIDE.png",
                    pesos: ["1.35 Kg", "4.2 Kg", "12 Kg", "20 Kg"] 
                },
                { 
                    subtitulo: "Trizide 65% Tableta", 
                    imagen: "TRIZIDE.png",
                    pesos: ["1.8 Kg", "4 Kg", "11 Kg"] 
                }
            ]
        },
        {
            grupo: "SHOCK CORRECTIVO",
            marca: "Spin",
            descripcion: "Tratamiento de choque para eliminar rápidamente contaminantes, algas y devolver la transparencia al agua.",
            imagenPrincipal: "SHOCK-CORRECTIVO.png",
            variantes: [
                { 
                    subtitulo: "Granular", 
                    imagen: "SHOCK-CORRECTIVO.png",
                    pesos: ["1.2 Kg", "4 Kg", "10 Kg", "18 Kg"] 
                }
            ]
        },
         {
            grupo: "TRICLORO",
            marca: "poolcare",
            descripcion: "Cloro estabilizado de alta concentración (91%). Ideal para mantener la desinfección diaria de la piscina de forma eficiente y económica.",
            imagenPrincipal: "tricloro.png",
            variantes: [
                { 
                    subtitulo: "Tricloro en grano", 
                    imagen: "tricloro azul.png",
                    pesos: ["1 Kg", "5 Kg", "10 Kg", "25 Kg", "50 KG"] 
                },
                { 
                    subtitulo: "Tricloro en tableta", 
                    imagen: "tricloro rojo.png",
                    pesos: ["tambito 5 tab", "5 Kg", "10 Kg", "25 Kg", "50 KG"] 
                }
            ]
        }
    ],
    balanceadores: [
        {
            grupo: "ALCALOS",
            marca: "Spin",
            descripcion: "Incrementador de alcalinidad total. Evita variaciones bruscas del pH y protege los equipos.",
            imagenPrincipal: "ALCALOS.png",
            variantes: [
                { 
                    subtitulo: "Alcalos", 
                    imagen: "ALCALOS.png",
                    pesos: ["5 Kg", "13 Kg"] 
                }
            ]
        },
        {
            grupo: "Alkalin",
            marca: "Spin",
            descripcion: "Subidor de pH rápido. Mejora el confort del bañista y optimiza la efectividad del cloro.",
            imagenPrincipal: "ALKALIN.png",
            variantes: [
                { 
                    subtitulo: "Alkalin Grano", 
                    imagen: "ALKALIN.png",
                    pesos: ["1.3 Kg", "5 Kg", "13 Kg"] 
                }
            ]
        },
        {
            grupo: "Acidet",
            marca: "Spin",
            descripcion: "Bajador de pH y alcalinidad. Previene incrustaciones de sarro y turbidez en el agua.",
            imagenPrincipal: "ACIDET.png",
            variantes: [
                { 
                    subtitulo: "Acidet Grano", 
                    imagen: "ACIDET.png",
                    pesos: ["1.9 Kg","6.5 Kg", "16 Kg"] 
                }
            ]
        },
       
    ],
    clarificantes: [
         {
            grupo: "Cristalin Platinum",
            marca: "Spin",
            descripcion: "Clarificante líquido de alta potencia. Agrupa partículas pequeñas para que el filtro las retenga fácilmente.",
            imagenPrincipal: "CRISTALIN-PLATINUM.png",
            variantes: [
                { 
                    subtitulo: "Cristalin Platinum", 
                    imagen: "CRISTALIN-PLATINUM.png",
                    pesos: ["1 L", "5 L", "10 L"] 
                }
            ]
        },
        {
            grupo: "Cristalin Green",
            marca: "Spin",
            descripcion: "Especializado en eliminar la turbidez verde causada por algas suspendidas en el agua.",
            imagenPrincipal: "CRISTALIN-GREEN.png",
            variantes: [
                { 
                    subtitulo: "Cristalin Green", 
                    imagen: "CRISTALIN-GREEN.png",
                    pesos: ["1 L"] 
                }
            ]
        },
        {
            grupo: "Clarit Plus",
            marca: "Spin",
            descripcion: "Coagulante y floculante. Ideal para limpiezas profundas y recuperación de aguas muy turbias.",
            imagenPrincipal: "CLARIT-PLUS.png",
            variantes: [
                { 
                    subtitulo: "Clarit Plus", 
                    imagen: "CLARIT-PLUS.png",
                    pesos: ["1 L", "5 L", "10 L"] 
                }
            ]
        },
        {
           grupo: "Algicín",
    marca: "Spin",
    descripcion: "Poderoso algicida preventivo y correctivo. Ideal para eliminar el aspecto verdoso y las paredes resbaladizas, manteniendo el agua cristalina.",
    imagenPrincipal: "algicin.png",
    variantes: [
        { 
            subtitulo: "Algicín Líquido", 
            imagen: "algicin.png",
            pesos: ["5 KG", "8 KG"] 
        }
    ]
        }
    ],
    /* --- COPIA ESTO DENTRO DE CATALOGO EN PRODUCTOS.JS --- */
equipos: [
    {
        grupo: "Bomba Pentair SuperFlo",
        marca: "Pentair",
        descripcion: "Bomba de alto rendimiento, silenciosa y de fácil mantenimiento. Ideal para la circulación eficiente en piscinas residenciales estándar.",
        imagenPrincipal: "SuperFlo.png",
        variantes: [
            { 
                subtitulo: "Super Flo", 
                imagen: "SuperFlo.png",
                pesos: ["0.75 HP", "1.0 HP", "1.5 HP", "2.0 HP"] 
            }
        ]
    },
    {
        grupo: "Bomba Hayward",
        marca: "Hayward",
        descripcion: "El estándar de la industria en eficiencia y durabilidad. Cuenta con un motor de alto rendimiento y una canasta extragrande para hojas.",
        imagenPrincipal: "HaywardSuperPump.jpg",
        variantes: [
            { 
                subtitulo: "Super Pump", 
                imagen: "HaywardSuperPump.jpg",
                pesos: [ "0.75 HP", "1.0 HP", "1.5 HP", "2.0 HP"] 
            }
        ]
    },
    {
        grupo: "Filtros de Arena SandDollar",
        marca: "Pentair",
        descripcion: "Filtros termoplásticos moldeados en una sola pieza. Ofrecen una excelente filtración física con una válvula de montaje superior muy fácil de operar.",
        imagenPrincipal: "filtropentair.png",
        variantes: [
            { 
                subtitulo: "Serie SD (Top Mount)", 
                imagen: "filtropentair.png",
                pesos: ["SD 40", "SD 60", "SD 70", "SD 80"] 
            }
        ]
    },
    {
        grupo: "Filtros de Cartucho StarClear",
        marca: "Hayward",
        descripcion: "Sistemas de filtración por cartucho de alta claridad. No requieren retrolavado, lo que ahorra miles de litros de agua y químicos.",
        imagenPrincipal: "filtrohayward.png",
        variantes: [
            { 
                subtitulo: "Elementos de Poliéster", 
                imagen: "filtrohayward.png",
                pesos: ["C500", "C900", "C1200"] 
            }
        ]
    },
    {
        grupo: "Filtro ProSeries S310T (30\")",
        marca: "Hayward",
        descripcion: "Filtro de arena de gran capacidad construido en material polimérico anticorrosivo. Incluye válvula selectora superior VariFlo de 2 pulgadas.",
        imagenPrincipal: "filtrohaywards310t.png",
        variantes: [
            { 
                subtitulo: "Montaje Superior (Top)", 
                imagen: "filtrohaywards310t.png",
                pesos: ["ProSeries 30\" - Válvula 2\""] 
            }
        ]
    }
],
/* --- FIN DEL BLOQUE PARA EQUIPOS --- */
};