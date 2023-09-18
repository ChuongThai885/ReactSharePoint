import getImage from "../Base/Image"

export const ANNOUNCEMENT_LIST = [
    {
        title: "New Learning System Is Live",
        description:
            "New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum. gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet... consetetur sadip m ipsum dolor sit amet, consetetur sadim ipsum dolorsadi...",
        src_img: getImage.image_gallery,
        from: "Human Resource",
        date: "05/Jan/2021",
    },
    {
        title: "IT Maintenance",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        src_img: getImage.image_gallery_1,
        from: "Human Resource",
        date: "02/Jan/2021",
    },
    {
        title: "IT Maintenance",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        src_img: getImage.image_gallery_2,
        from: "Human Resource",
        date: "02/Jan/2021",
    },
    {
        title: "IT Maintenance",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        src_img: getImage.image_gallery_3,
        from: "Human Resource",
        date: "02/Jan/2021",
    },
]

export const NEWS_LIST = [
    {
        title: "Tomorrow Healthy Check",
        description:
            "New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum. gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet... consetetur sadip m ipsum dolor sit amet, consetetur sadim ipsum dolorsadi...",
        src_img: getImage.markgroup2,
        date: "05/Jan/2021",
    },
    {
        title: "Air-conditioning is broken",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        src_img: getImage.markgroup_1,
        date: "02/Jan/2021",
    },
    {
        title: "Keep Running",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        src_img: getImage.markgroup_2,
        date: "02/Jan/2021",
    },
    {
        title: "Temperature above 37.3℃ need to report",
        description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        src_img: getImage.markgroup_3,
        date: "02/Jan/2021",
    },
]

export const IMAGE_LIST = [
    {
        img_src: getImage.image_gallery,
    },
    {
        img_src: getImage.image_gallery_1,
    },
    {
        img_src: getImage.image_gallery_2,
    },
    {
        img_src: getImage.image_gallery_3,
    },
]

export const VIDEO_LIST = [
    {
        img_src: getImage.video,
    },
    {
        img_src: getImage.video_1,
    },
    {
        img_src: getImage.video_2,
    },
    {
        img_src: getImage.video_3,
    },
]

const DOCUMENT_TYPE_ICON = {
    word: getImage.word,
    powerpoint: getImage.powerpoint,
    vsdx: getImage.vsdx,
}

export const DOCUMENT_GALLERY = [
    {
        name: "Policy",
        documents: [
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "Policy 1",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "Policy 2",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "Policy 4",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "Policy 6",
            },
        ],
    },
    {
        name: "SOP",
        documents: [
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "Demo Scripts",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "App Introduction",
            },
            { document_icon: DOCUMENT_TYPE_ICON.word, document_name: "Index" },
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "Training",
            },
        ],
    },
    {
        name: "Corporate Template",
        documents: [
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "Template 1",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "Template 2",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.word,
                document_name: "Template 3",
            },
        ],
    },
    {
        name: "Report",
        documents: [
            {
                document_icon: DOCUMENT_TYPE_ICON.vsdx,
                document_name: "Report 1",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.vsdx,
                document_name: "Report 2",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.vsdx,
                document_name: "Report 2",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.vsdx,
                document_name: "Report 2",
            },
        ],
    },
    {
        name: "Slider",
        documents: [
            {
                document_icon: DOCUMENT_TYPE_ICON.powerpoint,
                document_name: "Template 1",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.powerpoint,
                document_name: "Template 2",
            },
            {
                document_icon: DOCUMENT_TYPE_ICON.powerpoint,
                document_name: "Template 3",
            },
        ],
    },
]

export const LINK_TABS = [
    {
        title: "Training",
        icon: getImage.icon,
    },
    {
        title: "Organization",
        icon: getImage.icon_1,
    },
    {
        title: "Task",
        icon: getImage.icon_2,
    },
    {
        title: "Global Sales",
        icon: getImage.icon_3,
    },
    {
        title: "Birthday",
        icon: getImage.icon_4,
    },
    {
        title: "Health",
        icon: getImage.icon_5,
    },
    {
        title: "Service Desk",
        icon: getImage.icon_6,
    },
    {
        title: "Truck",
        icon: getImage.icon_7,
    },
    {
        title: "Idea",
        icon: getImage.icon_8,
    },
]

export const EVENT_LIST = [
    {
        title: "Register Portal",
        date: "01",
        month: "Jan",
        time: "09:00 AM - 09:30 AM",
    },
    {
        title: "IT Maintenance",
        date: "02",
        month: "Jan",
        time: "09:00 AM - 09:30 AM",
    },
    {
        title: "IT Maintenance",
        date: "03",
        month: "Jan",
        time: "09:00 AM - 09:30 AM",
    },
    {
        title: "IT Maintenance",
        date: "04",
        month: "Jan",
        time: "09:00 AM - 09:30 AM",
    },
]

export const QUESTION_LIST = [
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
    {
        question: "Commodo consequat. Duis auteequat.",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut aliqubore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation ullamco laboris nisiut aliquip ex uis nostrud exercitation ullamco laboris nisiut ip ex.",
    },
]
