var footer_vue = new Vue({
    el: '#vueappfooter',
    data: {
        footer_data: {
            footer_title: 'Ey Si Dy Trading Mfg. Corporation --Sample Website This website is developed by Gabriel Mori Baleta',
            footer_subtitle: 'Ey-Si-Dyi Trading & Mfg. Co. is your trusted provider of affordable services and products such as Industrial Traction Battery, Electric Vehicles Battery and parts of other various batteries.',
            number_detail: [
                '(T)+63 2 5533981 / +63 2 8615473 / ',
                '(M)+63 922 8238113 / +63 932 1311070'
            ],
            email_detail: [
                'arnold_enriquez@eysidyitrading.com ',
                'inquire@eysidyitrading.com'
            ],
            footer_subheader: 'Copyright © 2017 | EY SI DYI TRADING AND MFG.CO'

        }
    },
    methods: {
        setFooterData: function (data) {
            this.footer = data;
        }
    }
});


var service_vue = new Vue({
    el: '#service_vue',
    data: {
        service_list: [
            /*'Low factory-direct pricing',
            'Free delivery: within Metro Manila',
            'Leasing (battery rental) up to 36 months ',
            'Local service and installation',
            'Parts and accessories reconditioned batteries and chargers: pre-owned and refurbished units. Subject to availability.',
            'The fastest turnaround on custom sizes: contact our sales department for details',
            'We explain proper battery care: an informed customer is our best customer',
            'Battery handling equipment: complete turnkey battery handling systems',
            'Automatic battery watering systems: factory installed option',
            'On-site battery cleaning: available nation-wide'*/
            'Leasing (Battery & Forklift) up to 36 months',
            'Local service and installation',
            'Parts and accessories reconditioned batteries and chargers: preowned and refurbished units. Subject to availability.',
            'The fastest turnaround on custom sizes.',
            'Battery handling equipment: complete turnkey battery handling  systems.',
            'Automatic battery watering systems: factory installed option.',
            'OnEsite battery cleaning and maintenance service.',
            'Forklift servicing (Preventive Maintenance, repair and spare parts  supply).'
        ]
    }
});

var about_us_vue = new Vue({
    el:'#about_us_vue',
    data:{
        customer_list:[
            'GLOBAL EQUIPMENT',
            'HTI',
            'WUKONG (S) PTE. LTD.',
            'APC',
            'PRIME SALES INC.',
            'PRIME MOVERS',
            'MIGHTY CORPORATION',
            'ALASKA MILK  CORPORATION',
            'CROWN PHILIPPINES',
            'MULTICO PRIME',
            'JENTEC INC.',
            'ROYALE COLD STORAGE  INC.',
            'BOSTIK PHILIPPINES  INC.',
            'LF LOGISTICS',
            'YALETRUCK',
            'RAMGO INTERNATIONAL',
            'MONARK EQUIPMENT',
            'FOOTWEAR',
            'NUTRIA AS',
            'ASIAN TRANMISSION  CORPORATION',
            'BOSTIK LOGISTICS',
            'SAGARA METRO  PLASTIC INDUSTRIAL  CORP. ',
            'MD LAGUNA CORP.',
            'MD DISTRIPARK  MANILA, INC.',
            'BASIC LOGISTICS',
            'SUN LOGISTICS'
        ]
    }
})

var contact_vue = new Vue({
    el: '#contact_vue',
    data: {
        email_list: [{
            email: 'ade_battery@yahoo.com',
            link: 'https://mail.google.com/mail/?view=cm&fs=1&to=ade_battery@yahoo.com'
        },
                     {
                         email: 'annguanzon@yahoo.com',
                         link: 'https://mail.google.com/mail/?view=cm&fs=1&to=annguanzon@yahoo.com'
                     },
                     {
                         email: 'eysidyi_trading@yahoo.com.ph',
                         link: 'https://mail.google.com/mail/?view=cm&fs=1&to=eysidyi_trading@yahoo.com.ph'
                     }
                    ],
        contact_list: [
            '(T)+63 2 5533981 / +63 2 8615473 / ',
            '(M)+63 922 8238113 / +63 932 1311070'
        ]
    }
})

var product_vue = new Vue({
    el:'#product_vue',
    data:{
        product_list:[
            {
                name:'TRACTION BATTERY ',
                src:'resources/images/products/traction-battery.png',
                desc: 'Midac is one of the leading European manufacturers of industrial motive power  batteries and offer a complete range of DIN motive power cells “MDL” starting from  2PzS100 up to 10PzS1600 on standard production, including special products up  to 12PzS1920 on demand. The product offering is completed by a marketEoriented  range of British Standard Cells “MBS” from 55 to 105 Ah plate is available. '
            },
            {
                name:'TRACTION BATTERY GS YUASA MOTIVE POWER',
                src:'resources/images/products/traction-battery-gsyuasa.png'
            },
            {
                name:'Tires',
                src:'resources/images/products/tires.png'
            },
            {
                name:'HANDPALLET TRUCK',
                src:'resources/images/products/hand-pallet-truck.png'
            },
            {
                name:'FORKLIFT PARTS',
                src:'resources/images/products/parts.png'
            }
        ],

        accessory_list:[
            {
                name:'ASAHI BATTERY WATER SYSTEM & REPLACEMENT CARTIDGE',
                src:'resources/images/products/asahi-water-system&cartridge.png'
            },
            {
                name:'ELECTRIC WATER FILLING SYSTEM',
                src:'resources/images/products/electric-water-filing.png'
            },
            {
                name:'AUTO REFILLING VENT PLUG',
                src:'resources/images/products/auto-refilling-vent.png'
            },
            {
                name:'HYDROMETER',
                src:'resources/images/products/hydrometer.png'
            },
            {
                name:'REMA SOCKET',
                src:'resources/images/products/rema-socket.png'
            },
        ],
        product: ''
    },
    methods:{
        open_product: function(product){
            this.product = product;
        }
    }
})