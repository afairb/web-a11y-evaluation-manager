var WCAG_1 = {
    "1. Provide equivalent alternatives to auditory and visual content": [
        {
            name: "Checkpoint 1.1",
            description: "Provide a text equivalent for every non-text element (e.g., via \"alt\", \"longdesc\", or in element content). This includes: images, graphical representations of text (including symbols), image map regions, animations (e.g., animated GIFs), applets and programmatic objects, ascii art, frames, scripts, images used as list bullets, spacers, graphical buttons, sounds (played with or without user interaction), stand-alone audio files, audio tracks of video, and video.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-text-equivalent"],
            reasoning: "",
            guidance: "For example, in HTML:\n\u2022 Use \"alt\" for the IMG, INPUT, and APPLET elements, or provide a text equivalent in the content of the OBJECT and APPLET elements.\n\u2022 For complex content (e.g., a chart) where the \"alt\" text does not provide a complete text equivalent, provide an additional description using, for example, \"longdesc\" with IMG or FRAME, a link inside an OBJECT element, or a description link.\n\u2022 For image maps, either use the \"alt\" attribute with AREA, or use the MAP element with A elements (and other text) as content.\nRefer also to checkpoint 9.1 and checkpoint 13.10.",
            level: 1
        },
        {
            name: "Checkpoint 1.2",
            description: "Provide redundant text links for each active region of a server-side image map.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-redundant-server-links"],
            reasoning: "",
            guidance: "Refer also to checkpoint 1.5 and checkpoint 9.1.",
            level: 1
        },
        {
            name: "Checkpoint 1.3",
            description: "Until user agents can automatically read aloud the text equivalent of a visual track, provide an auditory description of the important information of the visual track of a multimedia presentation",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-auditory-descriptions"],
            reasoning: "",
            guidance: "Synchronize the auditory description with the audio track as per checkpoint 1.4. Refer to checkpoint 1.1 for information about textual equivalents for visual information.",
            level: 1
        },
        {
            name: "Checkpoint 1.4",
            description: "For any time-based multimedia presentation (e.g., a movie or animation), synchronize equivalent alternatives (e.g., captions or auditory descriptions of the visual track) with the presentation.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-synchronize-equivalents"],
            reasoning: "",
            guidance: "",
            level: 1
        },
        {
            name: "Checkpoint 1.5",
            description: "Until user agents render text equivalents for client-side image map links, provide redundant text links for each active region of a client-side image map.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-redundant-client-links"],
            reasoning: "",
            guidance: "Refer also to checkpoint 1.2 and checkpoint 9.1.",
            level: 3
        }
    ],
    "2. Don't rely on color alone": [
        {
            name: "Checkpoint 2.1",
            description: "Ensure that all information conveyed with color is also available without color, for example from context or markup.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-color-convey"],
            reasoning: "",
            guidance: "",
            level: 1
        },
        {
            name: "Checkpoint 2.2",
            description: "Ensure that foreground and background color combinations provide sufficient contrast when viewed by someone having color deficits or when viewed on a black and white screen. [Priority 2 for images, Priority 3 for text].",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-color-contrast"],
            reasoning: "",
            guidance: "",
            level: 2
        }
    ],
    "3. Use markup and style sheets and do so properly": [
        {
            name: "Checkpoint 3.1",
            description: "When an appropriate markup language exists, use markup rather than images to convey information.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-use-markup"],
            reasoning: "",
            guidance: "For example, use MathML to mark up mathematical equations, and style sheets to format text and control layout. Also, avoid using images to represent text -- use text and style sheets instead. Refer also to guideline 6 and guideline 11.",
            level: 2
        },
        {
            name: "Checkpoint 3.2",
            description: "Create documents that validate to published formal grammars.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-identify-grammar"],
            reasoning: "",
            guidance: "For example, include a document type declaration at the beginning of a document that refers to a published DTD (e.g., the strict HTML 4.0 DTD).",
            level: 2
        },
        {
            name: "Checkpoint 3.3",
            description: "Use style sheets to control layout and presentation.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-style-sheets"],
            reasoning: "",
            guidance: "For example, use the CSS 'font' property instead of the HTML FONT element to control font styles.",
            level: 2
        },
        {
            name: "Checkpoint 3.4",
            description: "Use relative rather than absolute units in markup language attribute values and style sheet property values.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-relative-units"],
            reasoning: "",
            guidance: "For example, in CSS, use 'em' or percentage lengths rather than 'pt' or 'cm', which are absolute units. If absolute units are used, validate that the rendered content is usable (refer to the section on validation).",
            level: 2
        },
        {
            name: "Checkpoint 3.5",
            description: "Use header elements to convey document structure and use them according to specification.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-logical-headings"],
            reasoning: "",
            guidance: "For example, in HTML, use H2 to indicate a subsection of H1. Do not use headers for font effects.",
            level: 2
        },
        {
            name: "Checkpoint 3.6",
            description: "Mark up lists and list items properly.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-list-structure"],
            reasoning: "",
            guidance: "For example, in HTML, nest OL, UL, and DL lists properly.",
            level: 2
        },
        {
            name: "Checkpoint 3.7",
            description: "Mark up quotations. Do not use quotation markup for formatting effects such as indentation.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-quotes"],
            reasoning: "",
            guidance: "For example, in HTML, use the Q and BLOCKQUOTE elements to markup short and longer quotations, respectively.",
            level: 2
        }
    ],
    "4. Clarify natural language usage": [
        {
            name: "Checkpoint 4.1",
            description: "Clearly identify changes in the natural language of a document's text and any text equivalents (e.g., captions).",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-identify-changes"],
            reasoning: "",
            guidance: "For example, in HTML use the \"lang\" attribute. In XML, use \"xml:lang\".",
            level: 1
        },
        {
            name: "Checkpoint 4.2",
            description: "Specify the expansion of each abbreviation or acronym in a document where it first occurs.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-expand-abbr"],
            reasoning: "",
            guidance: "For example, in HTML, use the \"title\" attribute of the ABBR and ACRONYM elements. Providing the expansion in the main body of the document also helps document usability.",
            level: 3
        },
        {
            name: "Checkpoint 4.3",
            description: "Identify the primary natural language of a document.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-identify-lang"],
            reasoning: "",
            guidance: "For example, in HTML set the \"lang\" attribute on the HTML element. In XML, use \"xml:lang\". Server operators should configure servers to take advantage of HTTP content negotiation mechanisms ([RFC2068], section 14.13) so that clients can automatically retrieve documents of the preferred language.",
            level: 3
        }
    ],
    "5. Create tables that transform gracefully": [
        {
            name: "Checkpoint 5.1",
            description: "For data tables, identify row and column headers.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-table-headers"],
            reasoning: "",
            guidance: "For example, in HTML, use TD to identify data cells and TH to identify headers.",
            level: 1
        },
        {
            name: "Checkpoint 5.2",
            description: "For data tables that have two or more logical levels of row or column headers, use markup to associate data cells and header cells.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-table-structure"],
            reasoning: "",
            guidance: "For example, in HTML, use THEAD, TFOOT, and TBODY to group rows, COL and COLGROUP to group columns, and the \"axis\", \"scope\", and \"headers\" attributes, to describe more complex relationships among data.",
            level: 1
        },
        {
            name: "Checkpoint 5.3",
            description: "Do not use tables for layout unless the table makes sense when linearized. Otherwise, if the table does not make sense, provide an alternative equivalent (which may be a linearized version).",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-table-for-layout"],
            reasoning: "",
            guidance: "Note. Once user agents support style sheet positioning, tables should not be used for layout. Refer also to checkpoint 3.3.",
            level: 2
        },
        {
            name: "Checkpoint 5.4",
            description: "If a table is used for layout, do not use any structural markup for the purpose of visual formatting.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-table-layout"],
            reasoning: "",
            guidance: "For example, in HTML do not use the TH element to cause the content of a (non-table header) cell to be displayed centered and in bold.",
            level: 2
        },
        {
            name: "Checkpoint 5.5",
            description: "Provide summaries for tables.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-table-summaries"],
            reasoning: "",
            guidance: "For example, in HTML, use the \"summary\" attribute of the TABLE element.",
            level: 3
        },
        {
            name: "Checkpoint 5.6",
            description: "Provide abbreviations for header labels.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-abbreviate-labels"],
            reasoning: "",
            guidance: "For example, in HTML, use the \"abbr\" attribute on the TH element.",
            level: 3
        }
    ],
    "6. Ensure that pages featuring new technologies transform gracefully": [
        {
            name: "Checkpoint 6.1",
            description: "Organize documents so they may be read without style sheets. For example, when an HTML document is rendered without associated style sheets, it must still be possible to read the document.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-order-style-sheets"],
            reasoning: "",
            guidance: "When content is organized logically, it will be rendered in a meaningful order when style sheets are turned off or not supported.",
            level: 1
        },
        {
            name: "Checkpoint 6.2",
            description: "Ensure that equivalents for dynamic content are updated when the dynamic content changes.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-dynamic-source"],
            reasoning: "",
            guidance: "",
            level: 1
        },
        {
            name: "Checkpoint 6.3",
            description: "Ensure that pages are usable when scripts, applets, or other programmatic objects are turned off or not supported. If this is not possible, provide equivalent information on an alternative accessible page.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-scripts"],
            reasoning: "",
            guidance: "For example, ensure that links that trigger scripts work when scripts are turned off or not supported (e.g., do not use \"javascript:\" as the link target). If it is not possible to make the page usable without scripts, provide a text equivalent with the NOSCRIPT element, or use a server-side script instead of a client-side script, or provide an alternative accessible page as per checkpoint 11.4. Refer also to guideline 1.",
            level: 1
        },
        {
            name: "Checkpoint 6.4",
            description: "For scripts and applets, ensure that event handlers are input device-independent.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-keyboard-operable-scripts"],
            reasoning: "",
            guidance: "Device independent:\nUsers must be able to interact with a user agent (and the document it renders) using the supported input and output devices of their choice and according to their needs. Input devices may include pointing devices, keyboards, braille devices, head wands, microphones, and others. Output devices may include monitors, speech synthesizers, and braille devices.\nPlease note that \"device-independent support\" does not mean that user agents must support every input or output device. User agents should offer redundant input and output mechanisms for those devices that are supported. For example, if a user agent supports keyboard and mouse input, users should be able to interact with all features using either the keyboard or the mouse.",
            level: 2
        },
        {
            name: "Checkpoint 6.5",
            description: "Ensure that dynamic content is accessible or provide an alternative presentation or page.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-fallback-page"],
            reasoning: "",
            guidance: "For example, in HTML, use NOFRAMES at the end of each frameset. For some applications, server-side scripts may be more accessible than client-side scripts.",
            level: 2
        }
    ],
    "7. Ensure user control of time\u2013sensitive content changes": [
        {
            name: "Checkpoint 7.1",
            description: "Until user agents allow users to control flickering, avoid causing the screen to flicker.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-flicker"],
            reasoning: "",
            guidance: "Note. People with photosensitive epilepsy can have seizures triggered by flickering or flashing in the 4 to 59 flashes per second (Hertz) range with a peak sensitivity at 20 flashes per second as well as quick changes from dark to light (like strobe lights).",
            level: 1
        },
        {
            name: "Checkpoint 7.2",
            description: "Until user agents allow users to control blinking, avoid causing content to blink (i.e., change presentation at a regular rate, such as turning on and off).",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-blinking"],
            reasoning: "",
            guidance: "",
            level: 2
        },
        {
            name: "Checkpoint 7.3",
            description: "Until user agents allow users to freeze moving content, avoid movement in pages.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-movement"],
            reasoning: "",
            guidance: "When a page includes moving content, provide a mechanism within a script or applet to allow users to freeze motion or updates. Using style sheets with scripting to create movement allows users to turn off or override the effect more easily. Refer also to guideline 8.",
            level: 2
        },
        {
            name: "Checkpoint 7.4",
            description: "Until user agents provide the ability to stop the refresh, do not create periodically auto-refreshing pages.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-no-periodic-refresh"],
            reasoning: "",
            guidance: "For example, in HTML, don't cause pages to auto-refresh with \"HTTP-EQUIV=refresh\" until user agents allow users to turn off the feature.",
            level: 2
        },
        {
            name: "Checkpoint 7.5",
            description: "Until user agents provide the ability to stop auto-redirect, do not use markup to redirect pages automatically. Instead, configure the server to perform redirects.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-no-auto-forward"],
            reasoning: "",
            guidance: "",
            level: 2
        }
    ],
    "8. Ensure direct accessibility of embedded user interfaces": [
        {
            name: "Checkpoint 8.1",
            description: "Make programmatic elements such as scripts and applets directly accessible or compatible with assistive technologies [Priority 1 if functionality is important and not presented elsewhere, otherwise Priority 2.] ",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-directly-accessible"],
            reasoning: "",
            guidance: "Refer also to guideline 6.",
            level: 1
        }
    ],
    "9. Design for device\u2013independence": [
        {
            name: "Checkpoint 9.1",
            description: "Provide client-side image maps instead of server-side image maps except where the regions cannot be defined with an available geometric shape.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-client-side-maps"],
            reasoning: "",
            guidance: "Refer also to checkpoint 1.1, checkpoint 1.2, and checkpoint 1.5.",
            level: 1
        },
        {
            name: "Checkpoint 9.2",
            description: "Ensure that any element that has its own interface can be operated in a device-independent manner.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-keyboard-operable"],
            reasoning: "",
            guidance: "Device independent:\nUsers must be able to interact with a user agent (and the document it renders) using the supported input and output devices of their choice and according to their needs. Input devices may include pointing devices, keyboards, braille devices, head wands, microphones, and others. Output devices may include monitors, speech synthesizers, and braille devices.\nPlease note that \"device-independent support\" does not mean that user agents must support every input or output device. User agents should offer redundant input and output mechanisms for those devices that are supported. For example, if a user agent supports keyboard and mouse input, users should be able to interact with all features using either the keyboard or the mouse.\n\nRefer also to guideline 8.",
            level: 2
        },
        {
            name: "Checkpoint 9.3",
            description: "For scripts, specify logical event handlers rather than device-dependent event handlers.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-device-independent-events"],
            reasoning: "",
            guidance: "",
            level: 2
        },
        {
            name: "Checkpoint 9.4",
            description: "Create a logical tab order through links, form controls, and objects.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-tab-order"],
            reasoning: "",
            guidance: "For example, in HTML, specify tab order via the \"tabindex\" attribute or ensure a logical page design.",
            level: 3
        },
        {
            name: "Checkpoint 9.5",
            description: "Provide keyboard shortcuts to important links (including those in client-side image maps), form controls, and groups of form controls.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-keyboard-shortcuts"],
            reasoning: "",
            guidance: "For example, in HTML, specify shortcuts via the \"accesskey\" attribute.",
            level: 3
        }
    ],
    "10. Use interim solutions": [
        {
            name: "Checkpoint 10.1",
            description: "Until user agents allow users to turn off spawned windows, do not cause pop-ups or other windows to appear and do not change the current window without informing the user.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-pop-ups"],
            reasoning: "",
            guidance: "For example, in HTML, avoid using a frame whose target is a new window.",
            level: 2
        },
        {
            name: "Checkpoint 10.2",
            description: "Until user agents support explicit associations between labels and form controls, for all form controls with implicitly associated labels, ensure that the label is properly positioned.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-unassociated-labels"],
            reasoning: "",
            guidance: "The label must immediately precede its control on the same line (allowing more than one control/label per line) or be in the line preceding the control (with only one label and one control per line). Refer also to checkpoint 12.4.",
            level: 2
        },
        {
            name: "Checkpoint 10.3",
            description: "Until user agents (including assistive technologies) render side-by-side text correctly, provide a linear text alternative (on the current page or some other) for all tables that lay out text in parallel, word-wrapped columns.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-linear-tables"],
            reasoning: "",
            guidance: "Note. Please consult the definition of linearized table. This checkpoint benefits people with user agents (such as some screen readers) that are unable to handle blocks of text presented side-by-side; the checkpoint should not discourage content developers from using tables to represent tabular information.",
            level: 3
        },
        {
            name: "Checkpoint 10.4",
            description: "Until user agents handle empty controls correctly, include default, place-holding characters in edit boxes and text areas.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-place-holders"],
            reasoning: "",
            guidance: "For example, in HTML, do this for TEXTAREA and INPUT.",
            level: 3
        },
        {
            name: "Checkpoint 10.5",
            description: "Until user agents (including assistive technologies) render adjacent links distinctly, include non-link, printable characters (surrounded by spaces) between adjacent links.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-divide-links"],
            reasoning: "",
            guidance: "",
            level: 3
        }
    ],
    "11. Use W3C technologies and guidelines": [
        {
            name: "Checkpoint 11.1",
            description: "Use W3C technologies when they are available and appropriate for a task and use the latest versions when supported.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-latest-w3c-specs"],
            reasoning: "",
            guidance: "",
            level: 2
        },
        {
            name: "Checkpoint 11.2",
            description: "Avoid deprecated features of W3C technologies.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-avoid-deprecated"],
            reasoning: "",
            guidance: "For example, in HTML, don't use the deprecated FONT element; use style sheets instead (e.g., the 'font' property in CSS).",
            level: 2
        },
        {
            name: "Checkpoint 11.3",
            description: "Provide information so that users may receive documents according to their preferences (e.g., language, content type, etc.)",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-content-preferences"],
            reasoning: "",
            guidance: "Note. Use content negotiation where possible.",
            level: 3
        },
        {
            name: "Checkpoint 11.4",
            description: "If, after best efforts, you cannot create an accessible page, provide a link to an alternative page that uses W3C technologies, is accessible, has equivalent information (or functionality), and is updated as often as the inaccessible (original) page.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-alt-pages"],
            reasoning: "",
            guidance: "Note. Content developers should only resort to alternative pages when other solutions fail because alternative pages are generally updated less often than \"primary\" pages. An out-of-date page may be as frustrating as one that is inaccessible since, in both cases, the information presented on the original page is unavailable. Automatically generating alternative pages may lead to more frequent updates, but content developers must still be careful to ensure that generated pages always make sense, and that users are able to navigate a site by following links on primary pages, alternative pages, or both. Before resorting to an alternative page, reconsider the design of the original page; making it accessible is likely to improve it for all users.",
            level: 1
        }
    ],
    "12. Provide context and orientation information": [
        {
            name: "Checkpoint 12.1",
            description: "Title each frame to facilitate frame identification and navigation.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-frame-titles"],
            reasoning: "",
            guidance: "For example, in HTML use the \"title\" attribute on FRAME elements.",
            level: 1
        },
        {
            name: "Checkpoint 12.2",
            description: "Describe the purpose of frames and how frames relate to each other if it is not obvious by frame titles alone.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-frame-longdesc"],
            reasoning: "",
            guidance: "For example, in HTML, use \"longdesc,\" or a description link.",
            level: 2
        },
        {
            name: "Checkpoint 12.3",
            description: "Divide large blocks of information into more manageable groups where natural and appropriate.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-group-information"],
            reasoning: "",
            guidance: "For example, in HTML, use OPTGROUP to group OPTION elements inside a SELECT; group form controls with FIELDSET and LEGEND; use nested lists where appropriate; use headings to structure documents, etc. Refer also to guideline 3.",
            level: 2
        },
        {
            name: "Checkpoint 12.4",
            description: "Associate labels explicitly with their controls.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-associate-labels"],
            reasoning: "",
            guidance: "For example, in HTML use LABEL and its \"for\" attribute.",
            level: 2
        }
    ],
    "13. Provide clear navigation mechanisms": [
        {
            name: "Checkpoint 13.1",
            description: "Clearly identify the target of each link.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-meaningful-links"],
            reasoning: "",
            guidance: "Link text should be meaningful enough to make sense when read out of context -- either on its own or as part of a sequence of links. Link text should also be terse.\nFor example, in HTML, write \"Information about version 4.3\" instead of \"click here\". In addition to clear link text, content developers may further clarify the target of a link with an informative link title (e.g., in HTML, the \"title\" attribute).",
            level: 2
        },
        {
            name: "Checkpoint 13.2",
            description: "Provide metadata to add semantic information to pages and sites.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-use-metadata"],
            reasoning: "",
            guidance: "For example, use RDF ([RDF]) to indicate the document's author, the type of content, etc.\nNote. Some HTML user agents can build navigation tools from document relations described by the HTML LINK element and \"rel\" or \"rev\" attributes (e.g., rel=\"next\", rel=\"previous\", rel=\"index\", etc.). Refer also to checkpoint 13.5.",
            level: 2
        },
        {
            name: "Checkpoint 13.3",
            description: "Provide information about the general layout of a site (e.g., a site map or table of contents).",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-site-description"],
            reasoning: "",
            guidance: "In describing site layout, highlight and explain available accessibility features.",
            level: 2
        },
        {
            name: "Checkpoint 13.4",
            description: "Use navigation mechanisms in a consistent manner.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-clear-nav-mechanism"],
            reasoning: "",
            guidance: "",
            level: 2
        },
        {
            name: "Checkpoint 13.5",
            description: "Provide navigation bars to highlight and give access to the navigation mechanism.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-nav-bar"],
            reasoning: "",
            guidance: "",
            level: 3
        },
        {
            name: "Checkpoint 13.6",
            description: "Group related links, identify the group (for user agents), and, until user agents do so, provide a way to bypass the group.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-group-links"],
            reasoning: "",
            guidance: "",
            level: 3
        },
        {
            name: "Checkpoint 13.7",
            description: "If search functions are provided, enable different types of searches for different skill levels and preferences.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-searches"],
            reasoning: "",
            guidance: "",
            level: 3
        },
        {
            name: "Checkpoint 13.8",
            description: "Place distinguishing information at the beginning of headings, paragraphs, lists, etc.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-front-loading"],
            reasoning: "",
            guidance: "Note. This is commonly referred to as \"front-loading\" and is especially helpful for people accessing information with serial devices such as speech synthesizers.",
            level: 3
        },
        {
            name: "Checkpoint 13.9",
            description: "Provide information about document collections (i.e., documents comprising multiple pages.).",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-bundled-version"],
            reasoning: "",
            guidance: "For example, in HTML specify document collections with the LINK element and the \"rel\" and \"rev\" attributes. Another way to create a collection is by building an archive (e.g., with zip, tar and gzip, stuffit, etc.) of the multiple pages.\nNote. The performance improvement gained by offline processing can make browsing much less expensive for people with disabilities who may be browsing slowly.",
            level: 3
        },
        {
            name: "Checkpoint 13.10",
            description: "Provide a means to skip over multi-line ASCII art.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-skip-over-ascii"],
            reasoning: "",
            guidance: "Refer to checkpoint 1.1.",
            level: 3
        }
    ],
    "14. Ensure that documents are clear and simple": [
        {
            name: "Checkpoint 14.1",
            description: "Use the clearest and simplest language appropriate for a site's content.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-simple-and-straightforward"],
            reasoning: "",
            guidance: "",
            level: 1
        },
        {
            name: "Checkpoint 14.2",
            description: "Supplement text with graphic or auditory presentations where they will facilitate comprehension of the page.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-icons"],
            reasoning: "",
            guidance: "Refer also to guideline 1.",
            level: 3
        },
        {
            name: "Checkpoint 14.3",
            description: "Create a style of presentation that is consistent across pages.",
            links: ["http://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-consistent-style"],
            reasoning: "",
            guidance: "",
            level: 3
        }
    ]
};

if (typeof exports !== "undefined") {
    exports.WCAG_1 = WCAG_1;
}
