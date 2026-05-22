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
    imagenPrincipal: "ALGICIN.png",
    variantes: [
        { 
            subtitulo: "Algicín Líquido", 
            imagen: "algicin.png",
            pesos: ["1 L", "5 L", "10 L", "20 L"] 
        }
    ]
        }
    ],
    /* --- COPIA ESTO DENTRO DE CATALOGO EN PRODUCTOS.JS --- */
equipos: [
    {
        grupo: "Bomba Pentair SuperFlo",
        marca: "Pentair",
        descripcion: "Bomba de alto rendimiento, silenciosa y de fácil mantenimiento. Ideal para piscinas residenciales estándar.",
        imagenPrincipal: "bomba-superflo.png",
        variantes: [
            { 
                subtitulo: "Modelos Monofásicos", 
                imagen: "bomba-superflo.png",
                pesos: ["0.5 HP", "0.75 HP", "1.0 HP", "1.5 HP", "2.0 HP", "2.5 HP"] 
            }
        ]
    },
    {
        grupo: "Bomba Pentair WhisperFlo",
        marca: "Pentair",
        descripcion: "La bomba más silenciosa del mercado. Diseñada para ofrecer la máxima circulación de agua con el mínimo ruido.",
        imagenPrincipal: "bomba-whisperflo.png",
        variantes: [
            { 
                subtitulo: "Alto Rendimiento", 
                imagen: "bomba-whisperflo.png",
                pesos: ["0.5 HP", "0.75 HP", "1.0 HP", "2.0 HP", "3.0 HP"] 
            }
        ]
    },
    {
        grupo: "Filtros de Arena (Serie SD)",
        marca: "Pentair",
        descripcion: "Sistemas de filtración de arena de alta eficiencia. Mantienen el agua libre de impurezas físicas con un mantenimiento sencillo.",
        imagenPrincipal: "filtro-arena.png",
        variantes: [
            { 
                subtitulo: "Tanque Termoplástico", 
                imagen: "filtro-arena.png",
                pesos: ["SD 35", "SD 40", "SD 60", "SD 70", "SD 80"] 
            }
        ]
    }
],
/* --- FIN DEL BLOQUE PARA EQUIPOS --- */
};