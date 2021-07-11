export default [
    // { header: "Dashboard" },
    // {
    //   group: "dasboard",
    //   model: false,
    //   icon: "mdi-apps",
    //   title: "Dashboard",
    //   children: [
    //     {
    //       icon: 'mdi-gauge',
    //       title: 'Dashboard',
    //       to: '',  
    //     }
    //   ]  
     
    // },
    { header: "Hachi.Tech" },
    {
      group: "/personal",
      model: false,
      icon: "mdi-account",
      title: "Personal",
      children: [
        {
          icon: "mdi-gauge",
          title: "Dashboard",
          to: "dashboard",
        },
      ],
    },
    {
        group: "/hachi",
        model: false,
        icon: "mdi-package",
        title: "Products & etc",
        children: [
          {
            icon: "mdi-adjust",
            title: "Product Master",
            to: "products-master",
            key: "PRD01",
          },
          {
            icon: "mdi-adjust",
            title: "Tags Master",
            to: "tags-master",
            key: "TAG01",
          },
          {
            icon: "mdi-adjust",
            title: "Coupon List",
            to: "coupon",
            key: "CPN01",
          },
          {
            icon: "mdi-adjust",
            title: "Promotions",
            to: "promotions",
            key: "PRM01",
          },
          // {
          //   icon: "mdi-adjust",
          //   title: "Products Check",
          //   to: "products-check",
          // },
        ],
    },
    {
      group: "/hachi",
      model: false,
      icon: "mdi-view-list",
      title: "Page Contents",
      children: [
        {
          icon: "mdi-adjust",
          title: "Widget Template",
          to: "widdget-template",
          key: "WDG01",
        },
        {
          icon: "mdi-adjust",
          title: "Content List",
          to: "content-list",
          key: "CNT01",
        },
      ],
    },
    {
      group: "/hachi",
      model: false,
      icon: "mdi-swap-horizontal-bold",
      title: "Transactions",
      children: [
        {
          icon: "mdi-adjust",
          title: "Transactions",
          to: "transactions",
          key: "TRN01",
        }
      ],
    },
    {
      group: "/hachi",
      model: false,
      icon: "mdi-office-building",
      title: "Corporate",
      children: [
        {
          icon: "mdi-adjust",
          title: "Corporate List",
          to: "corporate",
          key: "COR01",
        },
      ],
    },
    {
      group: "/hachi/report",
      model: false,
      icon: "mdi-file-table",
      title: "Reports",
      children: [
        {
          icon: "mdi-adjust",
          title: "E-Voucher",
          to: "e-voucher",
          key: "REV01",
        },
        {
          icon: "mdi-adjust",
          title: "Coupon Usage Tracking ",
          to: "coupon-usage",
          key: "RCU01",
        },
      ],
    },
    {
      group: "/hachi",
      model: false,
      icon: "mdi-shield-key",
      title: "User Access",
      children: [
        {
          icon: "mdi-adjust",
          title: "User",
          to: "user",
          key: "USR01",
        },
        {
          icon: "mdi-adjust",
          title: "User Group",
          to: "usergroup",
          key: "USG01",
        }
      ],
    },
    {
      group: "/hachi",
      model: false,
      icon: "mdi-cog",
      title: "Settings",
      children: [
        {
          icon: "mdi-adjust",
          title: "Color Master",
          to: "color",
          key:"CLR01"
        },
        {
          icon: "mdi-adjust",
          title: "Payment Master",
          to: "payment",
          key:"PAY01"
        },
        {
          icon: "mdi-adjust",
          title: "Egift Master",
          to: "egift",
          key:"EGF01"
        },
        {
          icon: "mdi-adjust",
          title: "Brand Master",
          to: "brand",
          key:"BRD01"
        },
        {
          icon: "mdi-adjust",
          title: "Category Master",
          to: "category",
          key:"CGY01"
        },
        {
          icon: "mdi-adjust",
          title: "Complimentary List",
          to: "complimentary",
          key:"CMP01"
        },
        {
          icon: "mdi-adjust",
          title: "Coupon Template",
          to: "coupon-template",
          key:"CTP01"
        },
        {
          icon: "mdi-adjust",
          title: "Content Template",
          to: "content-template",
          key:"COT01"
        },
        {
          icon: "mdi-adjust",
          title: "Email Template Master",
          to: "email-template",
          key:"ETM01"
        },
        {
          icon: "mdi-adjust",
          title: "Image Upload",
          to: "image-upload",
          key:"IMU01"
        },
        {
          icon: "mdi-adjust",
          title: "Menu Navigation",
          to: "menu-navigation",
          key:"NAV01"
        },
        {
          icon: "mdi-adjust",
          title: "Site Setting",
          to: "setting",
          key:"SET01"
        },
        {
          icon: "mdi-adjust",
          title: "Delivery Capacity",
          to: "delivery-capacity",
          key:"DELV01"
        },
      ],
    },
    { header: "Point of Sales" },
    {
        group: "/Products",
        model: false,
        icon: "mdi-monitor",
        title: "Sales",
        children: [
          {
            icon: "mdi-adjust",
            title: "Report",
            to: "",
          },
        ],
    }

]