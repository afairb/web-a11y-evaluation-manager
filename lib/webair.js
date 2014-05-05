var WebAIR = {
    "Forms": [
        {
            name: "Labels #1 (FAC01)",
            description: "Do all inputs and controls have text labels that accurately describe what they are for?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms01.htm"],
            reasoning: "Form controls need text labels so that users can understand the purpose of them. This is particularly important for people who use assistive technologies, such as screen readers, which may read out the form controls in a different order to how they are presented visually. In addition to merely including a text label, the label should also accurately describe the purpose of the form control.",
            guidance: "Give each form control (typically an <input> element) an ID. Then, use the <label> element to accurately describe the purpose of the form control. For example, an input field that requires a user's name could be labelled \"Your Name\". Similarly, an input field that requires a user's email address could be labelled \"Email\".\n\nYou can then associate this label with the form control by using the \"for\" attribute on the <label> element. This should be exactly the same as the ID of the form control to create an association between the two. This will be detected by assistive technologies, which will announce the label text when the form control is given focus.\n\nIf it is not appropriate to include a label (e.g. if space is limited or extra details might be confusing) then use the \"title\" attribute on the control to describe its purpose."
        },
        {
            name: "Labels #1.1 (FAC03)",
            description: "Is the label text used consistently throughout the website (e.g. different forms that use the same fields)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms03.htm"],
            reasoning: "Uniformity amongst controls that are similar helps the user to know what to expect, especially users who are blind or have low vision or cognitive impairments. If different labels are used on controls that have the same function, the user will not be aware that they have already encountered the control elsewhere and may not know what to expect from the control. By ensuring that labels are used consistently throughout a website, such confusion can be avoided.",
            guidance: "As well as ensuring that every form control has a <label> element or title attribute, check that the labels are used consistently across a page or across a website. For example, many web pages have a Search form field at the top of the page. There may also be one at the bottom. Both fields should have the same <label>: 'Search'. Furthermore, that label should be consistent across the website."
        },
        {
            name: "Labels #2 (FAC04)",
            description: "Are all labels positioned so that they are near the control that they label?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms04.htm"],
            reasoning: "The appropriate positioning of a label makes it much easier for a person to identify the purpose of a form control. It allows a person to make an association between the label and the form control. This is particularly important if the form is complex or if a person is looking for a specific form field.",
            guidance: "Position the label close to the control that it labels. Try to position the label before the form control. In left-to-right languages this will be either to the left of the field or above it. In right-to-left languages, this will be either to the right of the field or above it. The exception to this is labels for radio buttons and checkboxes, which are positioned after the field."
        },
        {
            name: "Labels #3 (FAC05)",
            description: "Does the form contain any required fields?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms05.htm"],
            reasoning: "Some forms include certain input fields that must be completed in order to submit the form. Such fields should be clearly indicated to the user. This will avoid them submitting the form with information missing and having to return to the form to correct it.",
            guidance: "There are several ways to indicate that a input field is required:\n1. Include the word required in the label associated with the input field (e.g. \"Your name [Required]\")\n2. Use the WAI-ARIA attribute 'aria-required' on the input field\n3. Use the HTML5 attribute 'required' on the input field"
        },
        {
            name: "Labels #3.1 (FAC06)",
            description: "Do you indicate that these fields are required in the label text (e.g. using an asterisk)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms06.htm"],
            reasoning: "Some forms include certain input fields that must be completed in order to submit the form. Such fields should be clearly indicated to the user. This will avoid them submitting the form with information missing and having to return to the form to correct it. One way to achieve this is via the label text.",
            guidance: "Include the word required in the label associated with the field (e.g. \"Your name [Required]\" or use an asterisk (e.g. \"Your name*\"). If you use an asterisk, make sure to explain the purpose of the asterisk at the top of the form."
        },
        {
            name: "Labels #3.2 (FAC07)",
            description: "Do you indicate required fields with colour?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms07.htm"],
            reasoning: "Some forms include certain fields that must be completed in order to submit the form. Such fields should be clearly indicated to the user. This will avoid them submitting the form with information missing and having to return to the form to correct it. This can be achieved via changing the colour of the relevant field or its label. However, this may cause problems for people who are blind or colorblind, who may not be able to perceive the colour differences that indicate whether a field is required.",
            guidance: "If you indicate required fields by changing the colour of the relevant field or its label, also include another way of conveying that information. For example, you could include the word required in the label associated with the field (e.g. \"Your name [Required]\" or use an asterisk (e.g. \"Your name*\"). If you use an asterisk, make sure to explain the purpose of the asterisk at the top of the form."
        },
        {
            name: "Labels #3.3 (FAC08)",
            description: "Do you indicate that these fields are required using code?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms08.htm"],
            reasoning: "Some forms include certain fields that must be completed in order to submit the form. Such fields should be clearly indicated to the user. This will avoid them submitting the form with information missing and having to return to the form to correct it. This can be achieved using code.",
            guidance: "Both WAI-ARIA and HTML5 include attributes that allow you to indicate that an input field is required. In WAI-ARIA, you can use the attribute 'aria-required' on the input field. In HTML5 you can use the attribute 'required' on the input field."
        },
        {
            name: "Grouping #1 (FAC09)",
            description: "Are there groups of inputs (e.g. checkboxes/radio buttons) that are grouped visually on the page?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms09.htm"],
            reasoning: "It is important to ensure that related form controls are grouped together, as this makes understanding the relationship between those controls easier. For example, a question in a form may have a number of checkboxes associated with it. By grouping the checkboxes visually on the page, this makes it clear that the checkboxes are all part of the same group of answers, and it makes it clear which question they are associated with.",
            guidance: "There are various ways that groups of inputs can be grouped visually. However, only certain HTML elements will accurately convey the relationship between groups of inputs. For example, the <fieldset> element can be used to group any related form controls. This is displayed visually with a border around the grouped controls. A <legend> element must also be included to provide a label to the group. Groups of inputs can also be marked up within a list element (either unordered <ul> or ordered <ol>), which offers a logical grouping and ensures the items are grouped visually on the page."
        },
        {
            name: "Grouping #1.1 (FAC10)",
            description: "Have you grouped those inputs in the code?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms10.htm"],
            reasoning: "It is possible to group inputs visually without reflecting this relationship in the HTML code. For example, a surrounding <div> element that is given a border will group inputs together visually. However, this relationship will not be interpreted correctly by assistive technologies, such as screen readers. Therefore, it is important to use meaningful HTML code to group inputs together. Assistive technologies will be able to interpret the relationship between a group of inputs and convey this to the user.",
            guidance: "There are various ways that groups of inputs can be grouped visually. However, only certain HTML elements will accurately convey the relationship between groups of inputs. For example, the <fieldset> element can be used to group any related form controls. This is displayed visually with a border around the grouped controls. A <legend> element can also be added to provide a label to the group. Groups of inputs can also be marked up within a list element (either unordered <ul> or ordered <ol>), which offers a logical grouping and ensures the items are grouped visually on the page."
        },
        {
            name: "Navigating controls #1 (FAC11)",
            description: "Can the keyboard be used to successfully tab through each control?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms11.htm"],
            reasoning: "Not everyone uses a mouse to interact with a webpage, and even if they do, they might find it difficult to make precise movements or clicks. Blind users typically use a screen reader, which is keyboard-operated. Many people with physical disabilities use a keyboard or an input device that acts as a keyboard (such as speech input software or on-screen keyboard). Because of the many alternatives to using a mouse, it is important to ensure that a webpage can be operated using a keyboard. This includes ensuring that a keyboard can be used to tab through each control of a form.",
            guidance: "Keyboard accessibility is determined by the source order of elements within the HTML code. Therefore, order your elements within the code in a way that would support a logical flow. Where forms are more complex, dynamic or larger you may use the tabindex attribute to tweak the tab order as needed. Also the tabindex attribute with a value equal to or greater than 0 can be used to set focus to elements other than links and focus controls if needed but caution is urged as unnecessarily adding extra steps can be considered to be poor practice."
        },
        {
            name: "Navigating controls #2 (FAC12)",
            description: "Does the tab order make sense in terms of a user moving through the form?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms12.htm"],
            reasoning: "In addition to making sure that a form can be operated and tabbed through using a keyboard, you should also make sure that the order in which the user tabs through the form makes sense. For example, a user entering a postal address into a form would expect to tab from the \"street\" field, to the \"city\" field, and to the \"postcode\" field. If the tabbing order is not logical, it could be very confusing to the user.",
            guidance: "Keyboard accessibility is determined by the source order of elements within the HTML code. Therefore, order your elements within the code in a way that would support a logical flow. Where forms are more complex, dynamic or larger you may use the tabindex attribute to tweak the tab order as needed. Also the tabindex attribute with a value equal to or greater than 0 can be used to set focus to elements other than links and focus controls if needed but caution is urged as unnecessarily adding extra steps can be considered to be poor practice."
        },
        {
            name: "Navigating controls #3 (FAC13)",
            description: "Does each control in the form highlight when it has focus?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms13.htm"],
            reasoning: "People with low vision or people with cognitive disabilities may benefit from a clear indication of which form control currently has focus. This is largely controlled by the user's browser. However, CSS can be used to provide an additional indicator.",
            guidance: "Use the CSS \":focus\" pseudo-class to select and style an input when it gains focus. These are well supported in most browsers and easy to apply."
        },
        {
            name: "Navigating controls #4 (FAC14)",
            description: "Have you ensured that none of the controls automatically update their content when you tab into them?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms14.htm"],
            reasoning: "If a form control causes something to happen when a user tabs into it, this could be confusing for people with cognitive disabilities or people using assistive technologies, such as screen readers or screen magnifiers. For example, if a form is automatically submitted once all forms have been completed, this may not be expected by the user. Similarly, if changing the option in a drop-down select box causes something to change without explicitly being actioned by the user, this may cause them confusion.",
            guidance: "Ensure that any change of context that is caused by a form (e.g. a change of language or submission of a form) is only triggered by a specific action, such as pressing a submit button or clicking on a link."
        },
        {
            name: "Navigating controls #5 (FAC15)",
            description: "Are there any controls that automatically open a new window when you tab into them?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms15.htm"],
            reasoning: "If a form control causes something to happen when a user tabs into it, this could be confusing for people with cognitive disabilities or people using assistive technologies, such as screen readers or screen magnifiers. For example, if a form field causes a new window to open when it is tabbed into by the user, the user may not realise that this has occurred. Alternatively, the new window may overlay the existing window and the user may not understand what has happened.",
            guidance: "Ensure that any change of context that is caused by a form (e.g. a change of language or submission of a form) is only triggered by a specific action, such as pressing a submit button or clicking on a link. If a change of context must occur automatically, try to ensure that the user is clearly notified."
        },
        {
            name: "Navigating controls #5.1 (FAC16)",
            description: "Do you provide an explanation of what will happen before the user tabs into the control?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms16.htm"],
            reasoning: "If a form control causes something to happen when a user tabs into it, this could be confusing for people with cognitive disabilities or people using assistive technologies, such as screen readers or screen magnifiers. If a new window must be opened, then users need to be made aware of what will happen before it occurs. This will allow the user to decide whether they want to leave the current window and it will also allow them to find their way back.",
            guidance: "If a form control causes something to happen when a user tabs into it, make sure this is clearly indicated before the control. This can be as simple as a text instruction that says \"Opens in new window\" or \"This will change the current language of the webpage\". If the user will be unable to use the \"back\" button of their browser to return to the current webpage, make sure this is clearly explained."
        },
        {
            name: "Navigating controls #6 (FAC17)",
            description: "Are there any controls that automatically update content in another part of the page when you activate them?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms17.htm"],
            reasoning: "Dynamic updating of content is often fine, providing that you inform the user of what they can expect in a way that is accessible to them. Failure to do this could result in unexpected changes of context and content which can be very confusing.\n\nOne way of informing screen reader users of updates and changes to a webpage or part of a webpage is by using WAI-ARIA 'Live Regions'. The \"aria-live\" attribute can be used to indicate to a screen reader that a section of the webpage is \"live\" and that it should announce any changes to the user when it updates. For example, a live train arrivals webpage could use the \"aria-live\" attribute, which would prompt the screen reader to announce any changes to the train arrival times.",
            guidance: "A simple way of notifying users that form controls will automatically update content in another part of the page is to provide a clear explanation on the webpage about what is going to happen.\n\nThe WAI-ARIA 'Live Regions' can also help to notify users of automatically updating content. To prevent this feature from notifying the user too frequently, there are several values that can be used. These are:\n\u2022 aria-live=\"off\"\nThe default value - changes will not be announced.\n\u2022 aria-live=\"polite\"\nUpdates will be announced when there is a 'pause' in the users interaction with the computer.\n\u2022 aria-live=\"assertive\"\nAny updates are announced immediately."
        },
        {
            name: "Navigating controls #6.1 (FAC18)",
            description: "Do you provide an explanation of what will happen before the user activates the control?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms18.htm"],
            reasoning: "It is important to notify users of any changes that will happen before the user activates the form control. This is important for any controls, but particularly important when it causes a change of context, such as a page refresh or a change of language.",
            guidance: "If a form control causes something to happen when a user tabs into it, make sure this is clearly indicated before the control. This can be as simple as a text instruction that says \"Opens in new window\" or \"This will change the current language of the webpage\". If the user will be unable to use the \"back\" button of their browser to return to the current webpage, make sure this is clearly explained."
        },
        {
            name: "Submitting forms #1 (FAC19)",
            description: "Do all forms have a submit button?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms19.htm"],
            reasoning: "If a form is submitted automatically, without being requested by the user, it may result in the wrong information being submitted. Therefore it is important that all forms have a submit button that gives the user the power to submit the form themselves when they are ready.",
            guidance: "Ensure that each form has a submit button (input type=\"submit\", input type=\"image\", or button type=\"submit\")."
        },
        {
            name: "Submitting forms #2 (FAC20)",
            description: "Do you provide a checkbox in addition to a submit button for users to confirm their responses before submitting them?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms20.htm"],
            reasoning: "This final step prompts the user to confirm that they have successfully completed their input and are ready to submit it. It helps to prevent the user from accidentally submitting a form and also prompts user to check that the data they have entered is accurate. This is particularly important when the form causes data to be updated or deleted and is not reversible (e.g. a banking form or an online shopping cart).",
            guidance: "Provide a checkbox that users must select to indicate they have reviewed their form responses and are ready for it to be submitted."
        },
        {
            name: "Submitting forms #3 (FAC21)",
            description: "Do you provide feedback when a form has been submitted successfully?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms21.htm"],
            reasoning: "When a user submits a form, it may not always be clear that it has submitted successfully. This can be very confusing for the user and may result in them attempting to submit the form again. It is important therefore to provide clear feedback letting the user know that their information has been successfully submitted.",
            guidance: "Once a form has been submitted, provide a clear message that conveys this to the user. It can be as simple as a response saying \"Thank you for submitting the form!\", or \"Submission successful! We'll be in touch soon.\" or whatever is suitable."
        },
        {
            name: "Resizing #1 (FAC22)",
            description: "Can the text be resized in the browser up to 200 percent without loss of content or functionality?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms22.htm"],
            reasoning: "Many users increase the size of the text on a webpage in order to be able to read it clearly. This is either achieved via a dedicated control on the webpage, or by using the browser controls. This is particularly the case for people who are partially sighted or have low vision, who may resize webpage text by up to 200%. Webpages need to be able to accommodate such resizing and scale accordingly without \"breaking\" or forcing the user to scroll horizontally.",
            guidance: "Define the font sizes in the CSS using relative units of measurement, such as ems (em) or percentage (%). An em is a relative unit of measurement. It's origin relates to the captial 'M' and it is relative to the font size of the parent element. The font size of the parent element can be defined in CSS but can also be relative to the default font size within the browser. This is usually ~ 16px. If this is the case, then 1em = 16px. You can make text content larger and/or smaller than this size by defining sizes in larger and smaller values of em. So 0.5em would be ~ 8 px and 1.5 em would be ~ 24px in size."
        },
        {
            name: "Time limits #1 (FAC23)",
            description: "Is there a time limit on completing the form?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms23.htm"],
            reasoning: "Many users don't want to be hurried! They may use assistive technologies or have slow or limited movement. People with visual or cognitive disabilities may require additional time to read and understand a webpage or to carry out activities such as filling in a form. If the webpage has a time limit, it may be difficult for certain users to carry out the activity in the required time.",
            guidance: "Ideally, designing webpages that are not time-dependent will help users complete their tasks. However, if time limits have to exist, they should be controllable, in an accessible way. Users should not feel pressurised to complete transactions - apart from a general sense of discomfort, this can also lead to unnecessary errors. Therefore, they be able to set an appropriate time or request additional time. Furthermore, they should be able to do this via a preferences setting or other accessible control."
        },
        {
            name: "Time limits #1.1 (FAC24)",
            description: "Do you allow users to request additional time?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms24.htm"],
            reasoning: "If the webpage has a time limit, it may be difficult for certain users to carry out the activity in the required time. One way of resolving this is to provide the option for the user to request additional time.",
            guidance: "Provide a mechanism (such as a setting or a control on the page) to allow users to request additional time. This may increase the time in discrete amounts or allow the user to specify an amount of time. It is recommended that the user should be able to extend the amount of time by 10 times the default time limit."
        },
        {
            name: "Time limits #1.1.1 (FAC25)",
            description: "Do you allow users to turn the time limit off completely?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms25.htm"],
            reasoning: "If the webpage has a time limit, it may be difficult for certain users to carry out the activity in the required time. One way of resolving this is to allow the user to turn off the time limit completely. This allows them to complete the task in their own time.",
            guidance: "Provide a mechanism (such as a setting or a control on the page) to allow users to turn off the time limit completely."
        },
        {
            name: "Time limits #1.2 (FAC26)",
            description: "Does this cause the user to be logged out?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms26.htm"],
            reasoning: "Automatically logging a user out can be very frustrating. However, if the time limit cannot be disabled or extended, then it may be inevitable that the user is logged out once the time limit has been exceeded. Where this is the case, the user should be able to log back in again without losing their data.",
            guidance: "When a user exceeds a time limit and is logged out, the website should temporarily store the user's data. Once the user has logged on again, the website should display the user's data exactly at it was prior to them being logged out."
        },
        {
            name: "Time limits #1.2.1 (FAC27)",
            description: "Do you save the user's data, allowing them to log back in again without losing it?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms27.htm"],
            reasoning: "Automatically logging a user out can be very frustrating. However, if the time limit cannot be disabled or extended, then it may be inevitable that the user is logged out once the time limit has been exceeded. Where this is the case, the user should be able to log back in again without losing their data. This is also very useful when unexpected incidents, such as a browser crash, occur. Instead of losing data that has been successfully inputted, the website will retain the data temporarily.",
            guidance: "When a user exceeds a time limit and is logged out, the website should temporarily store the user's data. Once the user has logged on again, the website should display the user's data exactly at it was prior to them being logged out."
        },
        {
            name: "Errors #1 (FAC28)",
            description: "Do you provide an example of how users should complete form fields (e.g. showing date fields as DD/MM/YY)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms28.htm"],
            reasoning: "Being clear about any restrictions on the format of data that a user must enter will help them to avoid any errors. For example, specifying that date fields should be entered as DD/MM/YY will avoid them attempting to enter data in an incorrect format.",
            guidance: "Provide clear examples that demonstrate what format any input should take. For example, indicate whether dates should be specified as day/month/year (UK) or month/day/year (US)."
        },
        {
            name: "Errors #2 (FAC29)",
            description: "If a user makes an error in a form and submits it, are they provided with an error message as to what the problem was?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms29.htm"],
            reasoning: "There are numerous errors that can occur when a user submits a form. They may have failed to complete a \"required\" field or they may have entered data in the wrong format (e.g. a date field entered as MM/DD/YY instead of DD/MM/YY). They may have attempted to purchase something that is no longer available or they may not have selected what they want to purchase! Regardless of the error, it is important to provide clear feedback as to what the problem is so that the user can make adjustments and not repeat the error.",
            guidance: "Once a form has been submitted and error(s) have been detected, provide a clear error message that conveys this to the user. The more specific the error message, the easier it will be for the user to correct it. For example, \"Error: Q6 has not been completed\" is better than \"There are errors with this form\". Try to ensure that the other information entered by the user is retained so that the user does not have to complete the entire form again."
        },
        {
            name: "Errors #3 (FAC30)",
            description: "If a user makes an error while filling out a form, do you automatically provide suggestions on how to fix the error?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms30.htm"],
            reasoning: "In addition to highlighting an errors in a form, it is also useful to make suggestions on how to fix the error. For example, a user of a travel planner might misspell the name of the location they are trying to navigate to. When the user submits the form and the error is detected, the error message could say \"You entered \"Brimingham\", did you mean \"Birmingham\"?\" By providing suggestions, it helps the user not only to identify the error but also helps them provide the correct response.",
            guidance: "Once a form has been submitted and error(s) have been detected, provide a clear error message that conveys this to the user and offers suggestions on how to correct the error. The more specific the error message, the easier it will be for the user to correct it.\n\nSome JavaScript toolkits, such as jQuery, have useful plugins that can be easily configured to provide accessible form validation."
        },
        {
            name: "Validation #1 (FAC31)",
            description: "Are the forms free of any validation errors?",
            links: ["http://www.cs.york.ac.uk/hci/webair/forms31.htm"],
            reasoning: "There are a number of reasons for ensuring that a webpage validates against formal specifications:\n1. To ensure that the webpage is rendered consistently across different platforms and user-agents. This includes assistive technology, such as screen readers, which rely on the appropriate semantic markup.\n2. To ensure that the webpage is future-proof and does not rely upon the rendering quirks of contemporary web browsers.\n3. To make the webpage easier to maintain. Conforming to a common standard makes websites easier to understand and maintain, either by the original author or someone else.\n4. To demonstrate good practice and professionalism by incorporating good, semantic, well-formed markup.",
            guidance: "The W3C provide a range of validation tools for common web technologies. Webpages can be validated either be entering a URI, uploading a file, or by entering the code directly. Depending on the validity of the code, this may return a number of errors or warnings, along with suggestions on how to fix the problem."
        }
    ],
    "Links": [
        {
            name: "Link text #1 (LNK01)",
            description: "Does the link text alone describe the purpose of each link?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links01.htm"],
            reasoning: "There are various ways of letting a user know what a link will do and where it will take them. One of the simplest ways to do this is by describing the link within the actual link text. That way, the link it is self-contained and does not rely on contextual information. This is also beneficial to users of assistive technology, such as screen readers, who will often choose to navigate a webpage by links, moving from one link to the next. By describing the purpose of the link in the link text, it will allow them to easily decide whether to follow the link.",
            guidance: "Make sure that the text of a link clearly describes the purpose of the link. Avoid using descriptions such as \"Click here\" or \"Read more\" which will not make sense out of context. Do not rely on the URI to inform the user as the destination may not always be obvious."
        },
        {
            name: "Link text #1.1 (LNK02)",
            description: "Do you clarify the purpose of each link elsewhere?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links02.htm"],
            reasoning: "If the purpose of a link cannot be described in the link text alone, then it is important to clarify its purpose elsewhere. There are various ways to do this. For example, the \"title\" attribute of the link can be used to provide additional information (although different assistive technologies handle this in different ways). A more reliable approach is to provide information in the text immediately surrounding the link. Headings, list titles and table headers can also provide additional information. You can also use WAI-ARIA attributes to point assistive technologies towards inpage descriptions of links. Essentially, provide enough information for users to understand what the link does and where it will take them.",
            guidance: "Make sure there is enough information about each link that users feel informed about its purpose and destination. Use the \"title\" attribute of the link (but do not rely on this approach). Make sure the text surrounding the link provides additional information. If this is not possible, or the link is not surrounding by any text, make sure that the nearest heading or list title or table header provide additional information. Use the \"aria-describedby\" attribute on a link to point it towards the ID of another element (on the same page) containing a more detailed explanation."
        },
        {
            name: "Link text #1.1.1 (LNK03)",
            description: "Is the clarification used consistently throughout the website (e.g. if multiple links point to the same location)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links03.htm"],
            reasoning: "Uniformity amongst link descriptions that are similar helps the user to know what to expect, especially users who are blind or have low vision or cognitive impairments. If different descriptions are used for links that are the same, the user will not be aware that they have already encountered the control elsewhere and may not know what to expect from the control. By ensuring that link descriptions are used consistently throughout a website, such confusion can be avoided.",
            guidance: "As well as ensuring that the purpose of every link is made clear, check that the link description is used consistently across a page or across a website. Of course, if the purpose of the same link is different in different places then a different link description should be provided."
        },
        {
            name: "Navigating links #1 (LNK06)",
            description: "Can you successfully access all links using the keyboard?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links06.htm"],
            reasoning: "Not everyone uses a mouse to interact with a webpage, and even if they do, they might find it difficult to make precise movements or clicks. Blind users typically use a screen reader, which is keyboard-operated. Many people with physical disabilities use a keyboard or an input device that acts as a keyboard (such as speech input software or on-screen keyboard). Because of the many alternatives to using a mouse, it is important to ensure that a webpage can be operated using a keyboard. This includes ensuring that a keyboard can be used to tab through all links on a webpage.",
            guidance: "Keyboard accessibility is determined by the source order of elements within the HTML code. Therefore, order your elements within the code in a way that would support a logical flow."
        },
        {
            name: "Navigating links #2 (LNK07)",
            description: "Does the order of the links make logical sense?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links07.htm"],
            reasoning: "In addition to making sure that links can be operated and tabbed through using a keyboard, you should also make sure that the order in which the user tabs through the links makes sense. If the tabbing order is not logical, it could be very confusing to the user.",
            guidance: "Keyboard accessibility is determined by the source order of elements within the HTML code. Therefore, order your elements within the code in a way that would support a logical flow."
        },
        {
            name: "Navigating links #3 (LNK08)",
            description: "Does each link highlight when it has focus?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links08.htm"],
            reasoning: "People with low vision or people with cognitive disabilities may benefit from a clear indication of which link currently has focus. This is largely controlled by the user's browser. However, CSS can be used to provide an additional indicator.",
            guidance: "Use the CSS \":focus\" pseudo-class to select and style a link when it gains focus. Pseudo-classes are well supported in most browsers and easy to apply.\nOther relevant pseudo-classes include:\n\u2022 :link - allows you to style unvisited links\n\u2022 :visited - allows you to style visited links\n\u2022 :hover - allows you to style the link when the mouse is hovered over it\n\u2022 :active - allows you to style the link that currently has focus\nThe order in which the pseudo-classes are listed in the CSS is important. This is because the CSS is interpreted in order with later selectors overriding the earlier selectors. By arranging pseudo-classes in the order above, this ensure that they will not override each other. A useful way to remember the order is \"LoVe HAte\" - Link, Visited, Hover, Active."
        },
        {
            name: "Navigating links #4 (LNK09)",
            description: "Are there any links that automatically open a new window when you tab into or activate them?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links09.htm"],
            reasoning: "If a link causes something to happen when a user tabs into it, this could be confusing for people with cognitive disabilities or people using assistive technologies, such as screen readers or screen magnifiers. For example, if a link causes a new window to open when it is tabbed into by the user, the user may not realise that this has occurred. Alternatively, the new window may overlay the existing window and the user may not understand what has happened.",
            guidance: "Ensure that any change of context that is caused by a link (e.g. a webpage opening in a new window) is only triggered by a specific action, such as clicking on the link. If a change of context must occur automatically, try to ensure that the user is clearly notified."
        },
        {
            name: "Navigating links #4.1 (LNK10)",
            description: "Do you provide an explanation of what will happen before the user tabs into or activates the control?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links10.htm"],
            reasoning: "If a link causes something to happen when a user tabs into it, this could be confusing for people with cognitive disabilities or people using assistive technologies, such as screen readers or screen magnifiers. If a new window must be opened, then users need to be made aware of what will happen before it occurs.",
            guidance: "If a link causes something to happen when a user tabs into it, make sure this is clearly indicated before the link. This can be as simple as a text instruction that says \"Opens in new window\" or \"This will change the current language of the webpage\". If the user will be unable to use the \"back\" button of their browser to return to the current webpage, make sure this is clearly explained."
        },
        {
            name: "Navigating links #5 (LNK11)",
            description: "Are there any links that automatically update content in another part of the page when you activate them?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links11.htm"],
            reasoning: "If a link causes something to happen when a user tabs into it, this could be confusing for people with cognitive disabilities or people using assistive technologies, such as screen readers or screen magnifiers. For example, if a link causes a drop-down menu to open when it is tabbed into by the user, the user may not realise that this has occurred. Alternatively, the new window may overlay the existing content and the user may not understand what has happened.",
            guidance: "Ensure that any change of context that is caused by a link (e.g. a drop-down menu opening) is only triggered by a specific action, such as clicking on the link. If a change of context must occur automatically, try to ensure that the user is clearly notified."
        },
        {
            name: "Navigating links #5.1 (LNK12)",
            description: "Do you provide an explanation of what will happen before the user tabs into or activates the control?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links12.htm"],
            reasoning: "If a link causes something to happen when a user tabs into it, this could be confusing for people with cognitive disabilities or people using assistive technologies, such as screen readers or screen magnifiers. If parts of the webpage must be updated, then then users need to be made aware of what will happen before it occurs.",
            guidance: "If a link causes something to happen when a user tabs into it, make sure this is clearly indicated before the link. This can be as simple as a text instruction that says \"Opens pop-up menu\" or \"This will close the current section\". If the user will be unable to use the \"back\" button of their browser to return to the current webpage, make sure this is clearly explained."
        },
        {
            name: "Image links #1 (LNK13)",
            description: "Do all image links have a text alternative?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links13.htm"],
            reasoning: "Whilst images are an important aspect of the Web, not everyone can experience them. For example, people who are partially-sighted may not be able to see images very well and people who are blind may not be able to see them at all. Some users may disable images to reduce bandwidth and search engines, such as Google, will only index the text on a webpage, therefore any information conveyed by an image will not be processed.\n\nTo address this, it is important that all images links have a text alternative that adequately describes the image. Alternative text acts as a fallback for people who, for whatever reason, cannot see the image. It means that people who are blind or partially-sighted can use assistive technology, such as a screen reader or screen magnifier, to read the text alternative of an image link, in much the same way they would read other text content on a webpage. Users who have disabled images will see the text alternative in place of an image, and search engines will be able to process the text alternative and properly index the webpage.",
            guidance: "To add alternative text to an image link, use the \"alt\" attribute (commonly, but incorrectly, called an \"alt tag\") of the <img> element."
        },
        {
            name: "Image links #1.1 (LNK14)",
            description: "Do the text alternatives adequately describe the images?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links14.htm"],
            reasoning: "It is relatively easy to provide alternative text, but more difficult to provide accurate and appropriate alternative text. The ultimate aim is to provide alternative text that serves the same purpose and presents the same information as the image. For images that convey a lot of information (such as a graph or chart), this may require a very detailed description. For images that are merely decorative, such as a visual flourish or a bullet point without any information, a description of the imagine is not appropriate, and the alt attribute can be left empty. Some images (such as a route map) may have a particular purpose and it is important to convey that purpose (such as describing the indicated route on the map) rather than literally describing the image.",
            guidance: "Automatic validation tools will only detect the presence or absence of an alt attribute. They will not help you determine whether the alternative text description is accurate or appropriate. Therefore, in writing alternative text, make sure the description of the image is succinct and clear. Think about what is useful for a non-sighted person to know about the image. Try disabling images in the browser and viewing the text alternative instead. Does the text convey the same information? Is anything lost?"
        },
        {
            name: "Image links #1.2 (LNK15)",
            description: "Are the text alternatives appropriate to a lower secondary school education level?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links15.htm"],
            reasoning: "As well as being accurate and appropriate, alternative text should also be easy to read. This will benefit all users but in particular people with specific learning disabilities who may have trouble reading and understanding complex text. A benchmark suggested by the W3C is to make sure text alternatives could be read and understood by somebody with a lower secondary school education level.",
            guidance: "Readability tools are available online and are built into word processing applications, such as Microsoft Word. Such tools will provide you with an indication of how easily your alternative text can be read and understood. However, there are various definitions of readability measuring different aspects of text (e.g. average sentence length, average word length, percentage of words on an approved \"safe\" list etc.). Therefore, the output of such tools should be taken only as an indication rather than a definitive measurement of readability. Writing text that is easy to read may take some practice. The W3C provides a list of tips to reduce the complexity of text:\n\u2022 Develop a single topic or subtopic per paragraph.\n\u2022 Use the simplest sentence forms consistent with the purpose of the content. For example, the simplest sentence-form for English consists of Subject-Verb-Object, as in John hit the ball or The Web site conforms to WCAG 2.0.\n\u2022 Use sentences that are no longer than the typical accepted length for secondary education. (Note: In English that is 25 words.)\n\u2022 Consider dividing longer sentences into two.\n\u2022 Use sentences that contain no more than two conjunction.\n\u2022 Indicate logical relationships between phrases, sentences, paragraphs, or sections of the text.\n\u2022 Avoid professional jargon, slang, and other terms with a specialized meaning that may not be clear to people.\n\u2022 Replace long or unfamiliar words with shorter, more common terms.\n\u2022 Remove redundant words, that is, words that do not change the meaning of the sentence.\n\u2022 Use single nouns or short noun-phrases.\n\u2022 Remove complex words or phrases that could be replaced with more commonly used words without changing the meaning of the sentence.\n\u2022 Use bulleted or numbered lists instead of paragraphs that contain long series of words or phrases separated by commas.\n\u2022 Make clear pronoun references and references to other points in the document.\n\u2022 Use the active voice for documents written in English and some other Western languages, unless there is a specific reason for using passive constructions. Sentences in the active voice are often shorter and easier to understand than those in the passive voice.\n\u2022 Use verb tenses consistently.\n\u2022 Use names and labels consistently."
        },
        {
            name: "Image links #1.3 (LNK16)",
            description: "Are the text alternatives used consistently throughout the website (e.g. to describe similar sorts of images)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links16.htm"],
            reasoning: "Uniformity of alternative text amongst images that are similar helps the user to know what to expect, especially users who are blind or have low vision or cognitive impairments. If different alternative texts are used on images that are the same, the user will not be aware that they have already encountered the image elsewhere and may not know what to expect from the image. By ensuring that alternative text is used consistently throughout a website, such confusion can be avoided.",
            guidance: "As well as ensuring that every image link has an alternative text description, check that the alternative text is used consistently across a page or across a website. Of course, if the same image conveys a different function in different places then a different alternative text should be provided."
        },
        {
            name: "Image links #1.4 (LNK17)",
            description: "Do you provide an additional long description (either in the text near the non-text content or a link to another location)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links17.htm"],
            reasoning: "Although there is no limit on the length of an alt attribute, the text should still be kept succinct and clear. However, it may not always be possible to adequately convey the purpose of the image. The description may simply be too long, or it may require additional information, such as a link to further details. In such cases, it is important to provide that information somewhere else.",
            guidance: "One possibility is to provide a description in a caption or in the text surrounding an image. Another possibility is to use the longdesc attribute of an image. This is a link to another location (such as another webpage) where a longer description is provided. Not all browsers and assistive technologies support the longdesc attribute and those that do often handle it in different ways. Furthermore, the longdesc attribute is currently not included in the HTML5 specification. Another alternative is to use the WAI-ARIA aria-describedby property. This allows you to provide additional information to a screen reader about an image."
        },
        {
            name: "Image links #1.5 (LNK18)",
            description: "Are they images of text?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links18.htm"],
            reasoning: "Sometimes images may be used to display text. This will often be to achieve a particular visual effect, such as an ornate heading or a quote. It may even be to display something that is text-based, such as a picture of a font or a picture of a street sign. It is particularly important in such cases to ensure that the content of the image, i.e. the text itself, can be read by everyone. This may mean providing a text alternative or ensuring that there is sufficient contrast between the text and its background.",
            guidance: "Determine whether an image contains any text. This does not just have to be a regular image. It could also be a logo coontaining text or styled headings and navigation items. It is unlikely that that an image that contains text could be classed as decorative.\n\nTo add alternative text to an image containg text, use the \"alt\" attribute (commonly, but incorrectly, called an \"alt tag\") of the <img> element."
        },
        {
            name: "Image links #1.5.1 (LNK19)",
            description: "Is the text of a sufficient size and contrast?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links19.htm"],
            reasoning: "People who are partially-sighted may not be able to see images of text very well. This may be due to there being little difference (or contrast) between the colour of the text and the colour of the background. Whilst the contrast and size can often be adjusted by the user when the text is part of a webpage, it is much harder, if not impossible, to adjust the text when it is part of an image. Therefore, it is important to check that an image of text has sufficient contrast before the webpage is published. The formulae necessary to calculate colour contrast are difficult to apply manually but there are many tools available that will automatically determine colour contrast.",
            guidance: "If possible, avoid using images of text and use standard HTML text instead. Webpages are no longer restricted to a limited selection of fonts and there are many fonts available in a wide variety of styles. If an image of text must be included, then you can use a colour contrast tool to check whether the contrast is sufficient. Unfortunately, because many colour contrast tools work by reading the colours specificied in the HTML or CSS, they are unable to determine the colour contrast of an image. However, the tools often include an option to input colours manually. You can then use a separate colour picker tool to determine the colour of the text and the background in the image and manually enter these values into the colour contrast tool."
        },
        {
            name: "Image links #2 (LNK20)",
            description: "Have adjacent image links and text links been combined into the same link?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links20.htm"],
            reasoning: "Some webpages include both text links and image links that have exactly the same purpose and go to exactly the same destination. This unnecessary duplication can be confusing, particularly to users of assistive technologies, such as screen readers. Whilst the text link and image link may be associated visually, assistive technologies will interpret them as two separate links, which can be confusing.",
            guidance: "Combine the text and image together in one link, and provide null alternative text on the image to eliminate duplication of text."
        },
        {
            name: "Groups of links #1 (LNK21)",
            description: "Have related links been grouped together (using an unordered list, ordered list or definition list)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links21.htm"],
            reasoning: "HTML provides a number of elements that allow related items (including links) to be grouped together. For example, a list element (either ordered or unordered) can be used to group the items in a navigation menu. Similarly, definition lists can be used to group terms and their definitions. Grouping related links help provide a more cohesive user experience and aids navigation.",
            guidance: "Wherever a group of links are related, use an appropriate element to group them together in the code. For example, use an unordered list element (<ul>) to group the links in a navigation menu (<li><a>)."
        },
        {
            name: "Validation #1 (LNK22)",
            description: "Are the links free of any validation errors?",
            links: ["http://www.cs.york.ac.uk/hci/webair/links22.htm"],
            reasoning: "There are a number of reasons for ensuring that a webpage validates against formal specifications:\n1. To ensure that the webpage is rendered consistently across different platforms and user-agents. This includes assistive technology, such as screen readers, which rely on the appropriate semantic markup.\n2. To ensure that the webpage is future-proof and does not rely upon the rendering quirks of contemporary web browsers.\n3. To make the webpage easier to maintain. Conforming to a common standard makes websites easier to understand and maintain, either by the original author or someone else.\n4. To demonstrate good practice and professionalism by incorporating good, semantic, well-formed markup.",
            guidance: "The W3C provide a range of validation tools for common web technologies. Webpages can be validated either be entering a URI, uploading a file, or by entering the code directly. Depending on the validity of the code, this may return a number of errors or warnings, along with suggestions on how to fix the problem."
        }
    ],
    "Tables": [
        {
            name: "Markup #1 (TAB01)",
            description: "Do you use the appropriate markup (e.g. table, tr, th, td) to present tables?",
            links: ["http://www.cs.york.ac.uk/hci/webair/tables01.htm"],
            reasoning: "Tables are an efficient and effective method of presenting data visually but they can be often difficult to interpret, especially when there is a lot of information. People with disabilities, particularly those using a screen reader, may find it difficult to distinguish between column/row headings and the actual data, or may struggle to determine which data item is associated with which heading.",
            guidance: "Using the appropriate table markup will make it easier for people with disabilities to interpret the data. By associating data cells with the appropriate heading and column/row information, screen readers are able to inform the user of this information for any given cell of the table."
        },
        {
            name: "Summarising table content #1 (TAB02)",
            description: "Do you summarise the purpose and contents of each table (e.g. using a caption or summary)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/tables02.htm"],
            reasoning: "A caption can be thought of as a title or label of a table. It provides a brief explanation of the table's purpose. This is helpful for anyone but particularly screen reader users. The caption is the first thing that is read by a screen reader when a table is given focus, allowing the user to immediately understand the purpose of the table.",
            guidance: "Whilst a caption is not always necessary, a table should at least have a summary. The summary should be used to expand upon the caption but should not duplicate it."
        },
        {
            name: "Summarising table content #1.1 (TAB03)",
            description: "Does the caption or summary suitably describe the purpose or contents of the table?",
            links: ["http://www.cs.york.ac.uk/hci/webair/tables03.htm"],
            reasoning: "Without a suitable description of the purpose or contents of a table, a user may miss important information or may be unable to interpret the table correctly.",
            guidance: "A caption should provide a brief explanation of a table's purpose, and a summary should provide a more detailed explanation of the structure and contents of a table. A detailed summary is particularly important for tables without captions. A summary may also explain how the table fits into the context of the current document."
        },
        {
            name: "Summarising table content #1.2 (TAB04)",
            description: "Is the table used to layout the page (and therefore does not require a caption or summary)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/tables04.htm"],
            reasoning: "Before the advent of CSS, tables were commonly used to structure the layout of an entire webpage. This allowed for greater control over the layout of the page at expense of readability and easy maintenance. The practice of using layout tables still continues today, although it is much less common. CSS-based layouts are generally recommended. This is because they retain the semantic meaning of the HTML code (e.g. a table is only used to present tabular data) and allow for the separation of presentation (e.g. CSS styles) from content (e.g. HTML).",
            guidance: "If tables are used to layout the page, then neither a caption nor summary is necessary."
        },
        {
            name: "Table headers #1 (TAB05)",
            description: "In each table, do you make it clear which data cells are associated with which header cells?",
            links: ["http://www.cs.york.ac.uk/hci/webair/tables05.htm"],
            reasoning: "Data tables can be difficult to interpret, particularly when they are complex or when there are multiple sets of headings. By associating data cells with the appropriate heading and column/row information, screen readers are able to inform the user of this information for any given cell of the table.",
            guidance: "Use of the appropriate markup can help to distinguish data cells <td> from headings <th>. A step further is to use the scope attribute to associate a heading with a particular row, column, or group of rows or columns."
        },
        {
            name: "Table headers #1.1 (TAB06)",
            description: "Is the table used to layout the page (and therefore does not require associations between header and data cells)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/tables06.htm"],
            reasoning: "Before the advent of CSS, tables were commonly used to structure the layout of an entire webpage. This allowed for greater control over the layout of the page at expense of readability and easy maintenance. The practice of using layout tables still continues today, although it is much less common. CSS-based layouts are generally recommended. This is because they retain the semantic meaning of the HTML code (e.g. a table is only used to present tabular data) and allow for the separation of presentation (e.g. CSS styles) from content (e.g. HTML).",
            guidance: "If tables are used to layout the page, then an association between table data and headings is unnecessary."
        },
        {
            name: "Colour coding #1 (TAB07)",
            description: "Do any tables use colour coding to convey information?",
            links: ["http://www.cs.york.ac.uk/hci/webair/tables07.htm"],
            reasoning: "Some tables use colour coding to convey information. For example, a bus timetable may use different colours to indicate different bus routes. Whilst this may make the table easier to understand for some users, it can cause problems for people who are blind or colourblind, who may not be able to perceive the colour differences.",
            guidance: "Whenever colour coding has been used to convey information, make sure there is another means of conveying the same same information (such as a text description, or different patterns, or differences in font etc.)."
        },
        {
            name: "Colour coding #1.1 (TAB08)",
            description: "Do they also use pattern or text to convey the same information?",
            links: ["http://www.cs.york.ac.uk/hci/webair/tables08.htm"],
            reasoning: "To ensure that the information in a table is conveyed to everyone, colour should be used only in addition to a text description. In the example of the colour-coded bus timetable, the name of each bus route should be displayed in addition to using different colours. Alternatively, different patterns or differences in font may be used to convey differences, although this would not be conveyed to a screen reader.",
            guidance: "Whenever colour coding has been used to convey information, make sure there is another means of conveying the same same information (such as a text description, or different patterns, or differences in font etc.)."
        },
        {
            name: "Validation #1 (TAB12)",
            description: "Are the tables free of any validation errors?",
            links: ["http://www.cs.york.ac.uk/hci/webair/tables12.htm"],
            reasoning: "There are a number of reasons for ensuring that a webpage validates against formal specifications:\n1. To ensure that the webpage is rendered consistently across different platforms and user-agents. This includes assistive technology, such as screen readers, which rely on the appropriate semantic markup.\n2. To ensure that the webpage is future-proof and does not rely upon the rendering quirks of contemporary web browsers.\n3. To make the webpage easier to maintain. Conforming to a common standard makes websites easier to understand and maintain, either by the original author or someone else.\n4. To demonstrate good practice and professionalism by incorporating good, semantic, well-formed markup.",
            guidance: "The W3C provide a range of validation tools for common web technologies. Webpages can be validated either be entering a URI, uploading a file, or by entering the code directly. Depending on the validity of the code, this may return a number of errors or warnings, along with suggestions on how to fix the problem."
        }
    ],
    "Images": [
        {
            name: "Text alternatives #1 (IMG01)",
            description: "Do all images have a text alternative (including where image replacement has been used)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images01.htm"],
            reasoning: "Whilst images are an important aspect of the Web, not everyone can experience them. For example, people who are partially-sighted may not be able to see images very well and people who are blind may not be able to see them at all. Some users may disable images to reduce bandwidth and search engines, such as Google, will only index the text on a webpage, therefore any information conveyed by an image will not be processed.\n\nTo address this, it is important that all images have a text alternative that adequately describes the image. As well as visually-rich images (e.g. a landscape or a family photo), this also includes graphs and charts, images of text (e.g. a photo of a sign), icons buttons and interactive components that use images. Alternative text acts as a fallback for people who, for whatever reason, cannot see the image. It means that people who are blind or partially-sighted can use assistive technology, such as a screen reader or screen magnifier, to read the text alternative of an image, in much the same way they would read other text content on a webpage. Users who have disabled images will see the text alternative in place of an image, and search engines will be able to process the text alternative and properly index the webpage.",
            guidance: "To add alternative text to an image, use the \"alt\" attribute (commonly, but incorrectly, called an \"alt tag\") of the <img> element.\n\nCSS is sometimes used to replace HTML text (e.g. a heading) with an image. It typically does this by moving the HTML text off screen and using a background image in its place. This is known as image replacement. There are various methods of image replacement, each with their own advantages and disadvantages. A common disadvantage is that the text cannot be read by users who have CSS enabled and images disabled. For this reason, any use of image replacement should be accompanied by the option to disable it or use an alternative style sheet."
        },
        {
            name: "Text alternatives #1.1 (IMG02)",
            description: "Do the text alternatives adequately describe the images?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images02.htm"],
            reasoning: "It is relatively easy to provide alternative text, but more difficult to provide accurate and appropriate alternative text. The ultimate aim is to provide alternative text that serves the same purpose and presents the same information as the image. For images that convey a lot of information (such as a graph or chart), this may require a very detailed description. For images that are merely decorative, such as a visual flourish or a bullet point without any information, a description of the imagine is not appropriate, and the alt attribute can be left empty. Some images (such as a route map) may have a particular purpose and it is important to convey that purpose (such as describing the indicated route on the map) rather than literally describing the image.",
            guidance: "Automatic validation tools will only detect the presence or absence of an alt attribute. They will not help you determine whether the alternative text description is accurate or appropriate. Therefore, in writing alternative text, make sure the description of the image is succinct and clear. Think about what is useful for a non-sighted person to know about the image. Try disabling images in the browser and viewing the text alternative instead. Does the text convey the same information? Is anything lost?"
        },
        {
            name: "Text alternatives #1.2 (IMG03)",
            description: "Are the text alternatives appropriate to a lower secondary school education level?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images03.htm"],
            reasoning: "As well as being accurate and appropriate, alternative text should also be easy to read. This will benefit all users but in particular people with specific learning disabilities who may have trouble reading and understanding complex text. A benchmark suggested by the W3C is to make sure text alternatives could be read and understood by somebody with a lower secondary school education level.",
            guidance: "Readability tools are available online and are built into word processing applications, such as Microsoft Word. Such tools will provide you with an indication of how easily your alternative text can be read and understood. However, there are various definitions of readability measuring different aspects of text (e.g. average sentence length, average word length, percentage of words on an approved \"safe\" list etc.). Therefore, the output of such tools should be taken only as an indication rather than a definitive measurement of readability. Writing text that is easy to read may take some practice. The W3C provides a list of tips to reduce the complexity of text:\n\u2022 Develop a single topic or subtopic per paragraph.\n\u2022 Use the simplest sentence forms consistent with the purpose of the content. For example, the simplest sentence-form for English consists of Subject-Verb-Object, as in John hit the ball or The Web site conforms to WCAG 2.0.\n\u2022 Use sentences that are no longer than the typical accepted length for secondary education. (Note: In English that is 25 words.)\n\u2022 Consider dividing longer sentences into two.\n\u2022 Use sentences that contain no more than two conjunction.\n\u2022 Indicate logical relationships between phrases, sentences, paragraphs, or sections of the text.\n\u2022 Avoid professional jargon, slang, and other terms with a specialized meaning that may not be clear to people.\n\u2022 Replace long or unfamiliar words with shorter, more common terms.\n\u2022 Remove redundant words, that is, words that do not change the meaning of the sentence.\n\u2022 Use single nouns or short noun-phrases.n- Remove complex words or phrases that could be replaced with more commonly used words without changing the meaning of the sentence.\n\u2022 Use bulleted or numbered lists instead of paragraphs that contain long series of words or phrases separated by commas.\n\u2022 Make clear pronoun references and references to other points in the document.\n\u2022 Use the active voice for documents written in English and some other Western languages, unless there is a specific reason for using passive constructions. Sentences in the active voice are often shorter and easier to understand than those in the passive voice.\n\u2022 Use verb tenses consistently.\n\u2022 Use names and labels consistently."
        },
        {
            name: "Text alternatives #1.3 (IMG04)",
            description: "Are the text alternatives used consistently throughout the website (e.g. to describe similar sorts of images)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images04.htm"],
            reasoning: "Uniformity of alternative text amongst images that are similar helps the user to know what to expect, especially users who are blind or have low vision or cognitive impairments. If different alternative texts are used on images that are the same, the user will not be aware that they have already encountered the image elsewhere and may not know what to expect from the image. By ensuring that alternative text is used consistently throughout a website, such confusion can be avoided.",
            guidance: "As well as ensuring that every image has an alternative text description, check that the alternative text is used consistently across a page or across a website. Of course, if the same image conveys a different function in different places then a different alternative text should be provided."
        },
        {
            name: "Text alternatives #1.4 (IMG05)",
            description: "Do you provide an additional long description (either in the text near the non-text content or a link to another location)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images05.htm"],
            reasoning: "Although there is no limit on the length of an alt attribute, the text should still be kept succinct and clear. However, it may not always be possible to adequately convey the purpose of the image. The description may simply be too long, or it may require additional information, such as a link to further details. In such cases, it is important to provide that information somewhere else.",
            guidance: "One possibility is to provide a description in a caption or in the text surrounding an image. Another possibility is to use the longdesc attribute of an image. This is a link to another location (such as another webpage) where a longer description is provided. Not all browsers and assistive technologies support the longdesc attribute and those that do often handle it in different ways. Furthermore, the longdesc attribute is currently not included in the HTML5 specification. Another alternative is to use the WAI-ARIA aria-describedby property. This allows you to provide additional information to a screen reader about an image."
        },
        {
            name: "Text alternatives #1.5 (IMG06)",
            description: "Are the images purely decorative?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images06.htm"],
            reasoning: "Some images are purely decorative and convey no information. Their purpose is simply to enhance the appearance of the webpage. For example, an image might be used for the bullet points in a list or a decorative flourish to separate two section of a page.",
            guidance: "Determine whether an image conveys any information. Does it have a purpose that should be conveyed to the user? Would anything be lost if the image was not there?"
        },
        {
            name: "Text alternatives #1.5.1 (IMG07)",
            description: "Do you indicate that the images are purely decorative and should therefore be ignored by assistive technology?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images07.htm"],
            reasoning: "If there is no content to convey, then there is no need to provide an alternative text description. Screen readers will then ignore the image and not announce it to the user. Often such decorative images will be declared as a background image in CSS, where an alternative text cannot be provided anyway.",
            guidance: "Set the alt attribute of a decorative image to null or empty, and this will indicate to assistive technologies that it can be safely ignored. Note that having a \"null\" alt attribute is not the same as having no alt attribute. Also, make sure that there is no space between the quotation marks of the alt attribute as this can be incorrectly interpreted by some assistive technologies.\n\nAlternatively, declare the decorative image as a background image in the CSS."
        },
        {
            name: "Text alternatives #1.6 (IMG08)",
            description: "Are they images of text?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images08.htm"],
            reasoning: "Sometimes images may be used to display text. This will often be to achieve a particular visual effect, such as an ornate heading or a quote. It may even be to display something that is text-based, such as a picture of a font or a picture of a street sign. It is particularly important in such cases to ensure that the content of the image, i.e. the text itself, can be read by everyone. This may mean providing a text alternative or ensuring that there is sufficient contrast between the text and its background.",
            guidance: "Determine whether an image contains any text. This does not just have to be a regular image. It could also be a logo coontaining text or styled headings and navigation items. It is unlikely that that an image that contains text could be classed as decorative.\n\nTo add alternative text to an image containg text, use the \"alt\" attribute (commonly, but incorrectly, called an \"alt tag\") of the <img> element."
        },
        {
            name: "Text alternatives #1.6.1 (IMG09)",
            description: "Is the text of a sufficient size and contrast?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images09.htm"],
            reasoning: "People who are partially-sighted may not be able to see images of text very well. This may be due to there being little difference (or contrast) between the colour of the text and the colour of the background. Whilst the contrast and size can often be adjusted by the user when the text is part of a webpage, it is much harder, if not impossible, to adjust the text when it is part of an image. Therefore, it is important to check that an image of text has sufficient contrast before the webpage is published. The formulae necessary to calculate colour contrast are difficult to apply manually but there are many tools available that will automatically determine colour contrast.",
            guidance: "If possible, avoid using images of text and use standard HTML text instead. Webpages are no longer restricted to a limited selection of fonts and there are many fonts available in a wide variety of styles. If an image of text must be included, then you can use a colour contrast tool to check whether the contrast is sufficient. Unfortunately, because many colour contrast tools work by reading the colours specificied in the HTML or CSS, they are unable to determine the colour contrast of an image. However, the tools often include an option to input colours manually. You can then use a separate colour picker tool to determine the colour of the text and the background in the image and manually enter these values into the colour contrast tool."
        },
        {
            name: "Colour #1 (IMG10)",
            description: "Do any images use colour alone to convey information (e.g. different colours in a graph)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images10.htm"],
            reasoning: "Some images use colour alone to convey information. For example, a chart may use different colours to convey different data or a bus timetable may use different colours to indicate different bus routes. Whilst this may make the image easier to understand for some users, it can cause problems for people who are blind or colourblind, who may not be able to perceive the colour differences.",
            guidance: "Whenever colour coding has been used to convey information, make sure there is another means of conveying the same same information (such as a text description, or different patterns, or differences in font etc.)."
        },
        {
            name: "Colour #1.1 (IMG11)",
            description: "Do they also use text alternatives or differences in pattern to convey the same information?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images11.htm"],
            reasoning: "To ensure that the information in an image is conveyed to everyone, colour should be used only in addition to a text description. In the example of the colour-coded bus timetable, the name of each bus route should be displayed in addition to using different colours. Alternatively, different patterns or differences in font may be used to convey differences, although this would not be conveyed to a screen reader. Whilst providing an alternative text description should avoid these problems, do not refer to colour alone in the description (e.g. \"the red line indicates...\").",
            guidance: "Whenever colour coding has been used to convey information, make sure there is another means of conveying the same same information (such as a text description, or different patterns, or differences in font etc.)."
        },
        {
            name: "CAPTCHAs #1 (IMG12)",
            description: "Do all CAPTCHAs have a text alternative that identifies the purpose and directs the user to an alternative version?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images12.htm"],
            reasoning: "A CAPTCHA is a type of challenge-response test used to determine whether or not a user is human. It requires the user to type the letters of a distorted image, sometimes with the addition of an obscured sequence of letters or digits that appears on the screen. They are commonly used on webpage forms to verify the authenticity of the information being submitted. CAPTCHAs pose a very difficult problem for accessibility because any attempt to clarify the CAPTCHA for the benefit of people with disabilities may make the CAPTCHA easier for computers to process and negate its very purpose. Therefore, the alternative text description of a CAPTCHA image should inform the user of the purpose of the image and direct them to an alternative, accessible version. This will often be an audio CAPTCHA that does not rely upon visual identification.",
            guidance: "If possible, avoid using visual CAPTCHAs to verify users. However, if a CAPTCHA must be used, then ensure that the alt attribute of the image contains an explanation of the CAPTCHA and directs the user towards an alternative, accessible version."
        },
        {
            name: "CAPTCHAs #2 (IMG13)",
            description: "Do you provide an alternative CAPTCHA (e.g. an audio version)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images13.htm"],
            reasoning: "One alternative to using a visual CAPTCHA is to ask a simple question, such as \"What is 2 + 2\" or \"On a hot day, is it hot or cold?\". Humans should be able to answer the question but it is unlikely that a computer will be able to. Be careful of making the questions too difficullt however, as this may exclude certain users. Another alternative is to use an audio CAPTCHA, which typically presents an audio file containing information that the user must enter into the form. Wherever a visual CAPTCHA is provided, an accessible alternative should be provided as well as a clear link to the alternative.",
            guidance: "If possible, avoid using visual CAPTCHAs to verify users. However, if a CAPTCHA must be used, then ensure that the alt attribute of the image contains an explanation of the CAPTCHA and directs the user towards an alternative, accessible version."
        },
        {
            name: "Flashing content #1 (IMG14)",
            description: "Are there any images on the page that flash or blink rapidly?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images14.htm"],
            reasoning: "Some people are very sensitive to flashing, flickering or rapidly moving images. For many they are a distraction but for some they can cause seizures. Seizures can be dangerous, or even life-threatening. Also, some visually impaired users may use screen magnifiers which would increase the size of the flashing content and intensify its impact.",
            guidance: "If possible, avoid using images on the page that flash, flicker or blink rapidy. However, if flashing, flickering or rapidly moving images must be used then try to restrict both the size of the image and rate of movement."
        },
        {
            name: "Flashing content #1.1 (IMG15)",
            description: "Do they flash less than three times a second?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images15.htm"],
            reasoning: "The W3C, and other standards bodies, recommend that flashing images should flash no more than three times a second so as not to cause a seizure in users with photosensitive epilepsy. Some guidelines, such as Section 508, specify no more than two times a second.",
            guidance: "Ensure that there are no more than three flashes during any 1-second period. There are tools available, such as the Photosensitive Epilepsy Analysis Tool (PEAT) that will determine whether an image is likely to cause seizures."
        },
        {
            name: "Flashing content #1.2 (IMG16)",
            description: "Do they blink for less than 5 seconds?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images16.htm"],
            reasoning: "The W3C, and other standards bodies, recommend that blinking images should blink for no more than five seconds at a time so as not to cause a seizure in users with photosensitive epilepsy.",
            guidance: "Ensure that the interval between the start and end of the blinking is less than five seconds. There are tools available, such as the Photosensitive Epilepsy Analysis Tool (PEAT) that will determine whether an image is likely to cause seizures."
        },
        {
            name: "Flashing content #1.3 (IMG17)",
            description: "Can users turn off the flashing or blinking completely?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images17.htm"],
            reasoning: "If flashing, flickering or rapidly moving images must be included, then the user must be given the opportunity to turn the movement off completely.",
            guidance: "Provide a control to turn off moving content completely. This is usually assigned to a keyboard key, such as the Escape key. This allows the user to turn off the moving content as soon as the page has loaded. Alternatively, provide a link that leads to an alternative version of the webpage without moving content. This should be at the very top of the page to allow users to select the option straight away."
        },
        {
            name: "Validation #1 (IMG18)",
            description: "Are the images free of any validation errors?",
            links: ["http://www.cs.york.ac.uk/hci/webair/images18.htm"],
            reasoning: "There are a number of reasons for ensuring that a webpage validates against formal specifications:\n1. To ensure that the webpage is rendered consistently across different platforms and user-agents. This includes assistive technology, such as screen readers, which rely on the appropriate semantic markup.\n2. To ensure that the webpage is future-proof and does not rely upon the rendering quirks of contemporary web browsers.\n3. To make the webpage easier to maintain. Conforming to a common standard makes websites easier to understand and maintain, either by the original author or someone else.\n4. To demonstrate good practice and professionalism by incorporating good, semantic, well-formed markup.",
            guidance: "The W3C provide a range of validation tools for common web technologies. Webpages can be validated either be entering a URI, uploading a file, or by entering the code directly. Depending on the validity of the code, this may return a number of errors or warnings, along with suggestions on how to fix the problem."
        }
    ],
    "Text": [
        {
            name: "Markup #1 (TXT01)",
            description: "Do you use the appropriate markup to present blocks of text (paragraphs, citations, blockquotes etc.)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text01.htm"],
            reasoning: "There are many different ways of presenting text to a user (e.g. paragraphs, headings, citations, blockquotes etc.). There are also many different HTML elements to mark the text up appropriately. Using the appropriate markup will allow people with disabilities, particularly those using a screen reader, to interpret and navigate the webpage properly. For example, screen reader users often move through a webpage via headings. If heading text has been marked up as such, this will allow the user to move through the webpage easily. Using the appropriate markup to present text also makes it easier to define the apperance of a webpage. This is because different styles can be applied to the different elements using CSS.",
            guidance: "Using the appropriate markup to present blocks of text will make it easier for people with disabilities to interpret the data. Paragragraph text should be marked up using the <p> element. Heading text should be marked up with the heading elements <h1> to <h6>. Citations (references to other sources) should be marked up with the <cite> element around the title of the work. Blockquotes should be marked up with the <blockquote> element."
        },
        {
            name: "Markup #2 (TXT02)",
            description: "Do you use the appropriate markup to present any variations in presentation of text (e.g. bold, italics, subscript and superscript)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text02.htm"],
            reasoning: "In addition to the different ways of presenting blocks of text, there are also different ways of presenting the individual words. For example, you might want to highlight certain words by making them bold, or italicising them. When letters are smaller and appear above the line (e.g. 26th January), this is called superscript. When letters are smaller and appear below the line (e.g. H2O), this is called subscript. HTML provides a range of semantic elements to support these variations in presentation. Using the appropriate markup will allow people with disabilities, particularly those using a screen reader, to interpret the meaning of the variation in presentation.",
            guidance: "Using the appropriate markup to present variations in the presentation of text will make it easier for people with disabilities to interpret the data. Text that is to be highlighted should be marked up using the <strong> element (not the now-deprecated <b> element). Text that is to be emphasised should be marked up using the <em> element (not the now-deprecated <i> element). Superscript should marked up using the <sup> element. Subscript should be marked up using the <sub> element."
        },
        {
            name: "Markup #2.1 (TXT03)",
            description: "Is the information conveyed through a variation in presentation also conveyed through text?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text03.htm"],
            reasoning: "Even when variations in text have been marked up appropriately, it is important to make sure the actual text conveys this information as well. This is to avoid conveying information solely by changes in presentation, which may not be understood by everyone.",
            guidance: "Whenever a variation in the presentation of text has been defined, check to make sure the actual text also conveys the same information. For example, a webpage in which new entries are marked up in bold could also include the word \"new\" next to each new entry."
        },
        {
            name: "Markup #3 (TXT04)",
            description: "Do you use the appropriate markup to present lists?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text04.htm"],
            reasoning: "Related items of text can be grouped together into lists. Lists may be ordered (e.g. 1., 2., 3.) or unordered (e.g. Eggs, Milk, Flour). Lists of items that each include a definition are called Definition Lists. Using the appropriate markup will allow people with disabilities, particularly those using a screen reader, to interpret and navigate the webpage properly. For example, when a screen reader comes across a list, it will announce how many items are in the list and where the user is in the list. Using the appropriate markup to present lists also makes it easier to define the apperance of a webpage. Lists are often used to group the links in a navigation bar together.",
            guidance: "Using the appropriate markup to present lists will make it easier for people with disabilities to interpret the data. Ordered lists should be marked up with the <ol> element, with individual list items marked up with the <li> element. Unordered lists should be marked up with the <ul> element, with individual list items marked up with the <li> element. Definition lists should be marked up with the <dl> element, with the term marked up with the <dt> element and the definition marked up with the <dd> element."
        },
        {
            name: "Markup #4 (TXT05)",
            description: "Do you use the appropriate markup to present headings?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text05.htm"],
            reasoning: "Headings can be used to organise the content on a webpage. Using the heading markup will allow people with disabilities, particularly those using a screen reader, to interpret and navigate the webpage properly. For example, screen reader users often move through a webpage via headings. If heading text has been marked up as such, this will allow the user to move through the webpage easily. The headings on a page should organised in a hierarchy with a single <h1> heading at the top (typically the title), one or more <h2> headings beneath it to represent sub-headings, and one or more <h3> headings beneath each of the <h2> headings to represent sub-sub-headings.",
            guidance: "Using the appropriate markup to present headings will make it easier for people with disabilities to interpret the data.\nHeadings should be marked up with the <h1> to <h6> elements, according to the hierarchy of the webpage. Do not use the <strong> element or other styled elements to create the appearance of a heading."
        },
        {
            name: "Descriptions #1 (TXT06)",
            description: "Does the webpage have relevant and descriptive headings?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text06.htm"],
            reasoning: "As well being used to structurally organise the content on a webpage into sections, headings should also be used to accurately describe the content in each section. This helps anyone reading the webpage to understand what each section contains and allow them to interpret and navigate the webpage efficiently. Screen reader users will often navigate a webpage by headings alone, so each heading should be sufficiently descriptive on its own.",
            guidance: "Check to make sure that the headings on a webpage accurately describe the section of content they precede. The headings should provide an at-a-glance understanding of the content on the webpage."
        },
        {
            name: "Descriptions #2 (TXT07)",
            description: "Does the webpage have a relevant and descriptive title element?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text07.htm"],
            reasoning: "It is important for a webpage to have a relevant and descriptive title. This doesn't just refer to the title that is displayed within the webpage. It also refers to the title that is declared in a <title> element, which is displayed at the top of the browser window. By making the title descriptive, it enables users to quickly identify the content of the webpage. It can also be used to convey the user's position in a sequence of webpages (e.g. \"Step 3 of 5 - Billing Address\"). A descriptive title is particularly important for screen readers users, as the title element is the very first thing that is read out by the screen reader when the webpage loads.",
            guidance: "Make sure the title of each webpage identifies the subject of the current webpage and identifies the website to whic the current page belongs. The title should be concise, and should make sense when read out of context."
        },
        {
            name: "Colour #1 (TXT08)",
            description: "Is the text of a sufficient size and contrast?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text08.htm"],
            reasoning: "People who are partially-sighted may not be able to see text very well. This may be due to the text being very small or there being little difference (or contrast) between the colour of the text and the colour of the background. Whilst most browsers allow the user to adjust the contrast and size of text, not everyone knows how to do this, so it is helpful to make the text easy to read without adjustment. The formulae necessary to calculate colour contrast are difficult to apply manually but there are many tools available that will automatically determine colour contrast.",
            guidance: "Use a colour contrast tool to check whether the size and contrast of text is sufficient."
        },
        {
            name: "Colour #1.1 (TXT09)",
            description: "Do you provide a link or control to an alternative version of the page with text that has sufficient size and contrast?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text09.htm"],
            reasoning: "To provide the user with greater control over the size and colour contrast of text, one option is to provide controls within the webpage that allow the user to adjust the size and colour of the text. Such controls might directly adjust the CSS of specific elements or load in a different style sheet altogether. Another option is to provide a link to an alternative version of the webpage that has sufficient size and contrast.",
            guidance: "Provide a control at the top of the webpage that allows the user to increase the size and colour contrast of the text on the webpage. This could be achieved using JavaScript, to adjust the CSS style attributes of the elements on the webpage. A more robust solution would be to use a PHP style sheet switcher to swap the style sheet completely, without relying on the user having JavaScript enabled. Alternatively, simply provide a link to a version of the webpage that has sufficient text size and colour contrast."
        },
        {
            name: "Colour #2 (TXT10)",
            description: "Does you use colour to convey variations in presentation of text (e.g. different coloured text to represent a heading)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text10.htm"],
            reasoning: "Some webpages use colour coding of text to convey information. For example, CSS may be used to change the colour of a paragraph element to signify it is a heading. Whilst this may make the text easier to understand for some users, it can cause problems for people who are blind or colourblind, who may not be able to perceive the colour differences.",
            guidance: "Whenever colour coding has been used to convey information, make sure there is another means of conveying the same same information. This can usually be achieved by using the appropriate semantic markup (such as using a heading element to markup heading text) but it can also be achieved by a text description, or different patterns, or differences in font etc."
        },
        {
            name: "Colour #2.1 (TXT11)",
            description: "Do you also use semantic markup to convey the same information (e.g. by using a heading element)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text11.htm"],
            reasoning: "To ensure that the information on a webpage is conveyed to everyone, colour should be used only in addition to semantic markup. In the example of the colour of the paragraph being changed to signify it is a heading, it would be much more appropriate to use a heading element instead. Alternatively, different patterns or differences in font may be used to convey differences, although this would not be conveyed to a screen reader.",
            guidance: "Whenever colour coding has been used to convey information, make sure there is another means of conveying the same same information. This can usually be achieved by using the appropriate semantic markup (such as using a heading element to markup heading text) but it can also be achieved by a text description, or different patterns, or differences in font etc."
        },
        {
            name: "Colour #3 (TXT12)",
            description: "Can the foreground and background colours of the text be changed by the user?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text12.htm"],
            reasoning: "Most browsers allow users to specify their own colour preferences that will override a webpage's CSS and HTML colour schemes. To avoid any conflicts between the browser's colour settings and the colours that have been specificed in the HTML and CSS, it is helpful to avoid specifying the colour of text and the background at all for all of the important content on a webpage.",
            guidance: "Do not specify background colours or text colours for any of the important content on a webpage. Instead, leave this to be defined by the colour settings in the user's browser. The colour of secondary content, such as headers and navigation menus can still be defined."
        },
        {
            name: "Colour #4 (TXT13)",
            description: "Do any instructions on the page rely upon colour, shape, location, or sound alone?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text13.htm"],
            reasoning: "It is very easy to rely upon shape, size, sound or location of something when describing it. For example, \"click on the green button\" assumes that the user is able to perceive colour - which they may not be able to do if they are colour blind. \"The items in the left column are for sale\" assumes that the user is able to perceive location - which they may not be able to do if they are blind and using a screen reader. By providing descriptions that do not rely upon a particular sensory perception, this ensures that instructions can be understood by everyone.",
            guidance: "Build in some redundancy by drawing upon multiple properties of an object when you describe it. For example, changing the instructions to \"click on the green arrow labelled 'next'\" and \"The items in the left column headed 'Sale Items' are for sale \" should ensure that they can be perceived by everyone."
        },
        {
            name: "Resizing #1 (TXT14)",
            description: "Can the text be resized in the browser up to 200 percent without loss of content or functionality?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text14.htm"],
            reasoning: "Many users increase the size of the text on a webpage in order to be able to read it clearly. This is either achieved via a dedicated control on the webpage, or by using the browser controls. This is particularly the case for people who are partially sighted or have low vision, who may resize webpage text by up to 200%. Webpages need to be able to accommodate such resizing and scale accordingly without \"breaking\".",
            guidance: "Use your browser's built-in controls to resize the text and determine whether the layout breaks at a certain point or if some controls become obscured.\n\nTo address this problem, define the font sizes in the CSS using relative units of measurement, such as ems (em) or percentage (%). An em is a relative unit of measurement. It's origin relates to the captial 'M' and it is relative to the font size of the parent element. The font size of the parent element can be defined in CSS but can also be relative to the default font size within the browser. This is usually ~ 16px. If this is the case, then 1em = 16px. You can make text content larger and/or smaller than this size by defining sizes in larger and smaller values of em. So 0.5em would be ~ 8 px and 1.5 em would be ~ 24px in size."
        },
        {
            name: "Resizing #2 (TXT15)",
            description: "Do you provide controls on the webpage that allow users to change the size of the text up to 200 percent?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text15.htm"],
            reasoning: "Whilst most browsers allow the user to adjust the size of text, not everyone knows how to do this, so it is helpful to make the text easy to read without adjustment. To provide the user with greater control over the size of text, one option is to provide a control within the webpage that allow the user to adjust the size of the text. Such controls might directly adjust the CSS of specific elements or load in a different style sheet altogether. Another option is to provide a link to an alternative version of the webpage that has sufficient text size.",
            guidance: "Provide a control at the top of the webpage that allows the user to increase the size of the text on the webpage. This could be achieved using JavaScript, to adjust the CSS style attributes of the elements on the webpage. A more robust solution would be to use a PHP style sheet switcher to swap the style sheet completely, without relying on the user having JavaScript enabled. Alternatively, simply provide a link to a version of the webpage that has sufficient text size."
        },
        {
            name: "Resizing #3 (TXT16)",
            description: "If the text is resized up to 200 percent, can the text still be read without scrolling horizontally?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text16.htm"],
            reasoning: "Many users increase the size of the text on a webpage in order to be able to read it clearly. This is either achieved via a dedicated control on the webpage, or by using the browser controls. This is particularly the case for people who are partially sighted or have low vision, who may resize webpage text by up to 200%. Webpages need to be able to accommodate such resizing and scale accordingly without \"breaking\" or forcing the user to scroll horizontally.",
            guidance: "Use your browser's built-in controls to resize the text and determine whether the layout breaks at a certain point or if some controls become obscured.\n\nTo address this problem, define the font sizes in the CSS using relative units of measurement, such as ems (em) or percentage (%). An em is a relative unit of measurement. It's origin relates to the captial 'M' and it is relative to the font size of the parent element. The font size of the parent element can be defined in CSS but can also be relative to the default font size within the browser. This is usually ~ 16px. If this is the case, then 1em = 16px. You can make text content larger and/or smaller than this size by defining sizes in larger and smaller values of em. So 0.5em would be ~ 8 px and 1.5 em would be ~ 24px in size."
        },
        {
            name: "Resizing #3.1 (TXT17)",
            description: "Do you provide a link or control to an alternative version of the page with text that can be read without scrolling horizontally?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text17.htm"],
            reasoning: "Whilst most browsers allow the user to adjust the size of text, not everyone knows how to do this, so it is helpful to make the text easy to read without adjustment. To provide the user with greater control over the size of text, one option is to provide a control within the webpage that allow the user to adjust the size of the text. Such controls might directly adjust the CSS of specific elements or load in a different style sheet altogether. Another option is to provide a link to an alternative version of the webpage that has sufficient text size without the need for horizontal scrolling.",
            guidance: "Provide a control at the top of the webpage that allows the user to increase the size of the text on the webpage. This could be achieved using JavaScript, to adjust the CSS style attributes of the elements on the webpage. A more robust solution would be to use a PHP style sheet switcher to swap the style sheet completely, without relying on the user having JavaScript enabled. Alternatively, simply provide a link to a version of the webpage that has sufficient text size."
        },
        {
            name: "Resizing #4 (TXT18)",
            description: "If the browser window is narrowed to a quarter of the screen width, can the text still be read without scrolling horizontally?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text18.htm"],
            reasoning: "People with visual or cognitive disabilities may find it easier to read narrow blocks of text. To do this, they may narrow the browser window, sometimes up to a quarter of the screen width. It is important therefore to ensure that the webpage can accommodate this and that any text wraps accordingly.",
            guidance: "When specifying the width of elements containing text, avoid using absolute units of measurement (such as pixels (px) or points (pt) in the CSS . Instead, define the width of elements in the CSS using relative units of measurement, such as ems (em) or percentage (%). This will allow the browser to automatically reflow text if the browser window is narrowed."
        },
        {
            name: "Resizing #5 (TXT19)",
            description: "Is the text aligned to either the left or right side (and not justified)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text19.htm"],
            reasoning: "People with specific learning disabilities sometimes struggle to read text that is both left and right justified. The uneven spacing between words in fully justified text can cause \"rivers of white\" space to run down the page making reading difficult and in some cases impossible. It is important therefore to align text to either the left or right side without any justification.",
            guidance: "Text alignment can be specified either left or right in CSS using the \"text-align\" property."
        },
        {
            name: "Resizing #6 (TXT20)",
            description: "Have you provided sufficient letter-spacing, line-spacing and paragraph-spacing?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text20.htm"],
            reasoning: "People with specific learning disabilities sometimes struggle to read text when the lines and paragraphs are close together. Providing extra space between lines and paragraphs allows users to follow where there are and identify when they have reached the end of a paragraph.\n\nThere are no specific requirements for letter spacing, other than to ensure that it is specified correctly, using CSS, and that additional characters are not inserted to create space between letters.",
            guidance: "Ensure that the line-height of text is at least 150% or \"space-and-a-half\". This means that the top of one line is 150% further from the top of the line below it than would be true when the text is \"single spaced\" (the default spacing). Line spacing can be specified in CSS using the \"line-height\" property.\n\nEnsure that the space between paragraphs is at least 150% or \"space-and-a-half\" larger than the line spacing. This means that the spacing from the top of the last line of one paragraph is 250% farther from the Top of the first line of the next paragraph (i.e., that there is a blank line between the two paragraphs that is 150% of the single space blank line). Paragraph spacing can be specified in CSS using the padding and margins of the paragraph element.\n\n\Letter spacing can be specified in CSS using the \"letter-spacing\" property."
        },
        {
            name: "Resizing #6.1 (TXT21)",
            description: "Do you provide a link or control that allows users to adjust the letter-spacing, line-spacing and paragraph-spacing?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text21.htm"],
            reasoning: "It is helpful to make the text easy to read without adjustment. However, to provide the user with greater control over the letter-spacing, line-spacing and paragraph-spacing, one option is to provide a control within the webpage that allow the user to adjust these attributes. Such controls might directly adjust the CSS of specific elements or load in a different style sheet altogether. Another option is to provide a link to an alternative version of the webpage that has sufficient spacing.",
            guidance: "Provide a control at the top of the webpage that allows the user to increase the letter-spacing, line-spacing and paragraph-spacing on the webpage. This could be achieved using JavaScript, to adjust the CSS style attributes of the elements on the webpage. A more robust solution would be to use a PHP style sheet switcher to swap the style sheet completely, without relying on the user having JavaScript enabled. Alternatively, simply provide a link to a version of the webpage that has sufficientspacing. If possible, provide several different options, for instance, space-and-a-half and double spacing for line spacing."
        },
        {
            name: "Language #1 (TXT22)",
            description: "Do you specify the language of the webpage (e.g. English, French etc.)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text22.htm"],
            reasoning: "It is important to specify the language of a webpage. This is because many assistive technologies, such as screen readers, or braille translation software, rely upon the specified language of the webpage to trigger the appropriate delivery. For example, a screen reader that identifies that a webpage is in French, will adapt to the pronunciation and syntax of that language. Defining the language of a webpage can also be useful for dictionaries that are built into the browser.",
            guidance: "Specify the language of a webpage by providing the \"lang\" and/or \"xml:lang\" attribute on the <html> element."
        },
        {
            name: "Language #2 (TXT23)",
            description: "Do you specify changes of language within the webpage (e.g. a French quotation within English text)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text23.htm"],
            reasoning: "As well as specifying the language of a webpage on the whole, it is also important to specify any changes in the language of a webpage.",
            guidance: "Specify the language of a webpage by providing the \"lang\" and/or \"xml:lang\" attribute on the element in which the change of language occurs (e.g. a <blockquote> element)."
        },
        {
            name: "Language #3 (TXT24)",
            description: "Is the webpage text appropriate to a lower secondary school education level?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text24.htm"],
            reasoning: "The text on a webpage should be easy to read. This will benefit all users but in particular people with specific learning disabilities who may have trouble reading and understanding complex text. A benchmark suggested by the W3C is to make sure text could be read and understood by somebody with a lower secondary school education level.",
            guidance: "Readability tools are available online and are built into word processing applications, such as Microsoft Word. Such tools will provide you with an indication of how easily your alternative text can be read and understood. However, there are various definitions of readability measuring different aspects of text (e.g. average sentence length, average word length, percentage of words on an approved \"safe\" list etc.). Therefore, the output of such tools should be taken only as an indication rather than a definitive measurement of readability. Writing text that is easy to read may take some practice. The W3C provides a list of tips to reduce the complexity of text:\n\u2022 Develop a single topic or subtopic per paragraph.\n\u2022 Use the simplest sentence forms consistent with the purpose of the content. For example, the simplest sentence-form for English consists of Subject-Verb-Object, as in John hit the ball or The Web site conforms to WCAG 2.0.\n\u2022 Use sentences that are no longer than the typical accepted length for secondary education. (Note: In English that is 25 words.)\n\u2022 Consider dividing longer sentences into two.\n\u2022 Use sentences that contain no more than two conjunction.\n\u2022 Indicate logical relationships between phrases, sentences, paragraphs, or sections of the text.\n\u2022 Avoid professional jargon, slang, and other terms with a specialized meaning that may not be clear to people.\n\u2022 Replace long or unfamiliar words with shorter, more common terms.\n\u2022 Remove redundant words, that is, words that do not change the meaning of the sentence.\n\u2022 Use single nouns or short noun-phrases.\n\u2022 Remove complex words or phrases that could be replaced with more commonly used words without changing the meaning of the sentence.\n\u2022 Use bulleted or numbered lists instead of paragraphs that contain long series of words or phrases separated by commas.\n\u2022 Make clear pronoun references and references to other points in the document.\n\u2022 Use the active voice for documents written in English and some other Western languages, unless there is a specific reason for using passive constructions. Sentences in the active voice are often shorter and easier to understand than those in the passive voice.\n\u2022 Use verb tenses consistently.\n\u2022 Use names and labels consistently."
        },
        {
            name: "Language #3.1 (TXT25)",
            description: "Do you provide a text summary at the top of the page or a link to a simpler version of the page?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text25.htm"],
            reasoning: "If the content of the webpage is too complex, it is helpful to provide a text summary that can be understood by everyone (in addition to the original content). This is particularly important for people with specific learning difficulties who may struggle to read the webpage. The summary should use short sentences and everyday words to capture the most important ideas and information in the content. Alternatively, if the content cannot be easily summarised, provide a link to an alternative version of the webpage that is simpler and easier to understand.",
            guidance: "The W3C provides a list of tips for creating a summary of complex content:\n1. Identify the most important ideas and information in the content.\n2. Write one or more paragraphs that use shorter sentences and more common words to express the same ideas and information. (The number of paragraphs depends on the length of the original.)\n3. Measure the readability of the summary.\n4. Edit the summary. Consider dividing longer sentences into two or replacing long or unfamiliar words with shorter, more common terms.\n5. Repeat steps 3 and 4 as needed."
        },
        {
            name: "Language #4 (TXT26)",
            description: "Do you provide definitions for any unusual jargon or slang in the content of the webpage?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text26.htm"],
            reasoning: "Definitions should be provided for any unusual jargon or slang in the content of a webpage. This is useful for everyone but particularly for people with specific learning difficulties.",
            guidance: "The definition of any unusual jargon or slang can be provided in the text content or in a separate glossary of terms. If the definition is on a separate webpage, then at least the first instance of the unusual jargon or slang should link to this definition."
        },
        {
            name: "Language #4.1 (TXT27)",
            description: "Do you provide a link to a glossary or a list of terms (including pronunciations)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text27.htm"],
            reasoning: "Definitions should be provided for any unusual jargon or slang in the content of a webpage. This is useful for everyone but particularly for people with specific learning difficulties.",
            guidance: "The definition of any unusual jargon or slang can be provided in the text content or in a separate glossary or list of terms. If the definition is on a separate webpage, then at least the first instance of the unusual jargon or slang should link to this definition."
        },
        {
            name: "Language #5 (TXT28)",
            description: "Do you provide definitions for any acronyms or abbreviations in the content of the webpage?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text28.htm"],
            reasoning: "Definitions should be provided for any acronyms or abbreviations in the content of the webpage. This is useful for everyone but particularly for people with specific learning difficulties or people who are partially sighted and use screen magnifiers. This is because the magnification may reduce any contextual cues from the surrounding text.",
            guidance: "The definition of any acronyms or abbreviations can be provided in the text content or in a separate glossary or list of terms. The <abbr> element can also be used to define abbreviations and acronyms. If the definition is on a separate webpage, then at least the first instance of the acronym or abbreviation should link to this definition."
        },
        {
            name: "Language #5.1 (TXT29)",
            description: "Do you provide a link to a glossary or a list of terms (including pronunciations)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text29.htm"],
            reasoning: "Definitions should be provided for any acronyms or abbreviations in the content of the webpage. This is useful for everyone but particularly for people with specific learning difficulties or people who are partially sighted and use screen magnifiers. This is because the magnification may reduce any contextual cues from the surrounding text.",
            guidance: "The definition of any acronyms or abbreviations can be provided in the text content or in a separate glossary or list of terms. The <abbr> element can also be used to define abbreviations and acronyms. If the definition is on a separate webpage, then at least the first instance of the acronym or abbreviation should link to this definition."
        },
        {
            name: "Language #6 (TXT30)",
            description: "Do you provide definition of any words with ambiguous pronunciation in the content of the webpage?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text30.htm"],
            reasoning: "Definitions should be provided for any words with ambiguous pronunciation in the content of the webpage. This is useful for everyone but particularly for people who are blind and use a screen reader, people who are partially sighted and use a screen magnifier, and people with specific learning difficulties. Screen readers may not pronounce a word correctly making it more difficult to understand. Similarly, screen magnifiers may reduce any contextual cues from the surrounding text. Where the text may be ambiguous if the pronunciation is unknown, It is important to specify the pronunciation.",
            guidance: "The definition of any words with ambiguous pronunciation can be provided in the text content or in a separate glossary or list of terms. If the definition is on a separate webpage, then at least the first instance of the word with ambiguous pronunciationshould link to this definition."
        },
        {
            name: "Language #6.1 (TXT31)",
            description: "Do you provide a link to a glossary or a list of terms (including pronunciations)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text31.htm"],
            reasoning: "Definitions should be provided for any words with ambiguous pronunciation in the content of the webpage. This is useful for everyone but particularly for people who are blind and use a screen reader, people who are partially sighted and use a screen magnifier, and people with specific learning difficulties. Screen readers may not pronounce a word correctly making it more difficult to understand. Similarly, screen magnifiers may reduce any contextual cues from the surrounding text. Where the text may be ambiguous if the pronunciation is unknown, It is important to specify the pronunciation.",
            guidance: "The definition of any words with ambiguous pronunciation can be provided in the text content or in a separate glossary or list of terms. If the definition is on a separate webpage, then at least the first instance of the word with ambiguous pronunciationshould link to this definition."
        },
        {
            name: "Audio alternatives #1 (TXT32)",
            description: "Do you provide a spoken version of all text content?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text32.htm"],
            reasoning: "Some people with cognitive disabilities may struggle with written text and may prefer to hear the text being read out loud. Some assistive technologies, particularly screen readers, can be used to read out a webpage but it can be helpful to also provide a spoken version of any text content.",
            guidance: "Provide a spoken version of any written text. This may be a achieved by recording human speech or by generating synthetic speech (e.g. using text-to-speech software). The spoken version should be provided in a common audio format used on the internet, such as MP3. Provide a clearly labelled link to the audio alternative immediately before or after the video content."
        },
        {
            name: "Visual alternatives #1 (TXT33)",
            description: "Do you provide visual illustrations, pictures, and symbols to help explain difficult concepts?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text33.htm"],
            reasoning: "It is said that \"a picture paints a thousand words\". Indeed, where possible, a well thought out illustration can be very helpful in aiding people's understanding of difficult ideas and concepts. This is particularly important for people with learning difficulties who may struggle with written text.",
            guidance: "There are various visual illustrations, pictures, and symbols that can be used to help explain difficult concepts. For example:\n\u2022 Charts and graphs help users understand complex data.\n\u2022 Diagrams, flowcharts, videos, and animations help users understand processes.\n\u2022 Concept maps and other graphic organisers help users understand how ideas are related to each other.\n\u2022 Photographs, drawings, and videos can help users understand natural or historical events or objects."
        },
        {
            name: "Sign language interpretation of text #1 (TXT34)",
            description: "Do you provide sign language to help explain difficult concepts?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text34.htm"],
            reasoning: "Sign language is a system of communication using visual gestures and signs. For people who are deaf or hard of hearing, sign language may be their primary and preferred method of communication. Therefore, a sign language version of the page may be easier for them to understand than a written language version.",
            guidance: "Sign language interpretation of text content should be displayed in an embedded video on the webpage. Check that the sign language interpreter can be clearly seen. If not, check that the video content can be expanded to fill the screen."
        },
        {
            name: "Validaton #1 (TXT35)",
            description: "Is the text free of any validation errors?",
            links: ["http://www.cs.york.ac.uk/hci/webair/text35.htm"],
            reasoning: "There are a number of reasons for ensuring that a webpage validates against formal specifications:\n1. To ensure that the webpage is rendered consistently across different platforms and user-agents. This includes assistive technology, such as screen readers, which rely on the appropriate semantic markup.\n2. To ensure that the webpage is future-proof and does not rely upon the rendering quirks of contemporary web browsers.\n3. To make the webpage easier to maintain. Conforming to a common standard makes websites easier to understand and maintain, either by the original author or someone else.\n4. To demonstrate good practice and professionalism by incorporating good, semantic, well-formed markup.",
            guidance: "The W3C provide a range of validation tools for common web technologies. Webpages can be validated either be entering a URI, uploading a file, or by entering the code directly. Depending on the validity of the code, this may return a number of errors or warnings, along with suggestions on how to fix the problem."
        }
    ],
    "Audio & Video": [
        {
            name: "Text alternatives (purpose) #1 (AAV01)",
            description: "Does all audio and video content have a text alternative that describes the purpose of the audio or video content (e.g. an alt attribute, label or text description)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia01.htm"],
            reasoning: "Whilst audio and video is an important aspect of the Web, not everyone can experience it. For example, people who are partially-sighted may not be able to see videos very well and people who are blind may not be able to see them at all. Some users may disable plug-ins for audio and video content (e.g. Flash or Quicktime) to reduce bandwidth or they may not be able to use them at all on mobile devices. Also. search engines, such as Google, will only index the text on a webpage, therefore any information conveyed through non-text content will not be processed. To address this, it is important that all audio and video content has a text alternative that adequately describes its purpose.\n\nAlternative text acts as a fallback for people who, for whatever reason, cannot see audio and video content. It means that people who are blind or partially-sighted can use assistive technology, such as a screen reader or screen magnifier, to read the text alternative of audio and video content in much the same way they would read other text content on a webpage. Users who have disabled plug-ins for audio and video content or who are unable to see it on their mobile device will see the text alternative instead, and search engines will be able to process the text alternative and properly index the webpage.",
            guidance: "There are various methods of providing alternative text.\n\nTo add alternative text to an object element (which is typically used to embed audio and video content, such as Flash or Java), include a paragraph element <p> containing the alternative text within the object element.\n\nFlash, Java and other plug-ins also have their own accessibility options to allow you to specify alternative text descriptions.\n\nHTML5 also has new native <audio> and <video> elements that can make the creation of accessible players much easier. WAI-ARIA also provides ways to describe the purpose of audio and video content by using the \"aria-labelledby\" by or \"aria-describedby\" attributes, provided there is an existing inpage description."
        },
        {
            name: "Text alternatives (purpose) #1.1 (AAV02)",
            description: "Do the text alternatives adequately describe the purpose of the audio or video content?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia02.htm"],
            reasoning: "It is relatively easy to provide alternative text, but more difficult to provide accurate and appropriate alternative text. The ultimate aim is to provide alternative text that serves the same purpose and presents the same information as the audio and video content. For audio and video content that conveys a lot of information (such as video or animation), this may require a very detailed description. Some audio and video content may have a particular purpose and it is important to convey that purpose even if its full function cannot be provided accessibly.",
            guidance: "In writing alternative text, make sure the description of the audio and video content is succinct and clear. Think about what is useful for a non-sighted person to know about the audio and video content. Try disabling the audio and video content in the browser and viewing the text alternative instead. Does the text convey the same information? Is anything lost?"
        },
        {
            name: "Text alternatives (purpose) #1.2 (AAV03)",
            description: "Do you provide an additional long description (either in the text near the audio or video content or a link to another location)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia03.htm"],
            reasoning: "Although there is no limit on the length of an alt attribute, the text should still be kept succinct and clear. However, it may not always be possible to adequately convey the purpose of the audio and video content. The description may simply be too long, or it may require additional information, such as a link to further details. In such cases, it is important to provide that information somewhere else.",
            guidance: "One possibility is to provide a description in a caption or in the text surrounding the audio and video content. Another possibility is to use the longdesc attribute of an image. This is a link to another location (such as another webpage) where a longer description is provided. Not all browsers and assistive technologies support the longdesc attribute and those that do often handle it in different ways. Furthermore, the longdesc attribute is currently not included in the HTML5 specification. Another alternative is to use the WAI-ARIA \"aria-describedby\" property. This allows you to provide additional information to a screen reader about an image."
        },
        {
            name: "Text alternatives (content) #1 (AAV04)",
            description: "Does all audio and video content have a text alternative that describes the actual content (e.g. a transcript)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia04.htm"],
            reasoning: "Though alternative text descriptions can go some way towards making audio and video content accessible, a more comprehensive approach is to provide a transcript of the information presented in the audio and video content. This is particularly beneficial to blind and partially sighted users, who may not be able to see video, and deaf and hard of hearing users, who may not be able to hear audio. Providing transcripts is a more costly approach (both in terms of money and time) but it ensures that the information contained within the audio and video content is accessible and can be read by everyone.",
            guidance: "Transcription of audio and video can be carried out by a third party or by yourself.Whilst the latter is more expensive, both in terms of money and time, it may also provide a more accurate reflection of the audio and video content."
        },
        {
            name: "Text alternatives (content) #1.1 (AAV05)",
            description: "Do the text alternatives match the dialogue and information in the audio or video content?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia05.htm"],
            reasoning: "Text alternatives should match the dialogue and information in the audio and video content as closely as possible. For audio content, the text alternative should include both dialogue and any sounds (either natural or articial). For video content, the text alternative should describe what is happening in the video including descriptions of people, scenery, actions, expressions, etc. Where there are multiple people or characters speaking, the text alternative should identify who is speaking. Essentially, the text alternative should include whatever is necessary to accurately tell the same story and provide the same information.",
            guidance: "Scripts can be a good place to start when creating transcripts of audio or video, however care must be taken to reflect any deviations from the script in the actual production."
        },
        {
            name: "Text alternatives (content) #1.2 (AAV08)",
            description: "Are there links to the text alternatives immediately before or after the audio or video content?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia08.htm"],
            reasoning: "If a user is unable to use the audio and video content, the text alternative should be easy for them to find. The text alternative might be on the same webpage or it could be on a different webpage, particularly if it is a lengthy transcript. Either way, a link to the text alternative should be located immediately before or after the audio and video content.\n\nIf the text alternative is on a different webpage, the user should be able to easily return to the original webpage. If the text alternative is the same webpage, the user should be able to return to the point at which they jumped to the text alternative.",
            guidance: "Provide a clearly labelled link to the text alternative immediately before or after the audio and video content. This may be an internal link, if the content is on the same webpage, or it may be a link to a different webpage.\n\nIf the transcript is on a different webpage, provide a link back to the original webpage. If the transcript is on the same webpage, provide a \"back\" or \"go to top\" link to allow the user to return to the main content."
        },
        {
            name: "Text alternatives (content) #1.3 (AAV11)",
            description: "Is the audio or video content live (and therefore an accurate text alternative cannot be provided)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia11.htm"],
            reasoning: "Although live audio and video content can be transcribed in real time, this may not always be possible. The resources necessary to provide realtime transcription are very expensive and not always accurate, as there is no time for corrections and refinements. Nevertheless, it is still important to convey the purpose of the live audio and video content, if not the actual content.",
            guidance: "There are various approaches to providing a text alternative for live audio and video content. One approach is to describe the purpose of the live audio and video content, if not the actual content. Another approach is to create captions or text alternatives that are as near-as-possible. A further approach is to provide a prepared statement or script which may not reflect the audio and video content precisely but will give a good indication of its content."
        },
        {
            name: "Text alternatives (content) #1.3.1 (AAV12)",
            description: "Do you provide a short text alternative that describes the purpose of the live audio or video content, if not the actual content?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia12.htm"],
            reasoning: "It is important that live audio and video content has a text alternative that adequately describes its purpose. Alternative text acts as a fallback for people who, for whatever reason, cannot see audio and video content. It means that people who are blind or partially-sighted can use assistive technology, such as a screen reader or screen magnifier, to read the text alternative of live audio and video content in much the same way they would read other text content on a webpage. The text alternative may not convey the actual content but it conveys the purpose of the content.",
            guidance: "There are various methods of providing alternative text.\n\nTo add alternative text to an object element (which is typically used to embed audio and video content, such as Flash or Java), include a paragraph element <p> containing the alternative text within the object element.\n\nFlash, Java and other plug-ins also have their own accessibility options to allow you to specify alternative text descriptions.\n\nHTML5 also has new native <audio> and <video> elements that can make the creation of accessible players much easier. WAI-ARIA also provides ways to describe the purpose of audio and video content by using the \"aria-labelledby\" by or \"aria-describedby\" attributes, provided there is an existing inpage description."
        },
        {
            name: "Text alternatives (content) #1.3.2 (AAV13)",
            description: "Do you create near-as-possible live captions or text alternatives?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia13.htm"],
            reasoning: "Techniques for real time transcription of live audio and video content include stenography (which uses a stenotype machine with a phonetic keyboard, as used by court reporters) and voice captioning (which uses voice recognition software. Such techniques are very expensive and not always accurate, as there is no time for corrections and refinements. Also. with both methods, there is an inevitable delay between the dialogue being spoken and the captions appearing on screen. However, in some cases, transcriptions or captions that are as near-as-possible to the original content may be preferable to other text alternatives.",
            guidance: "Real time transcription of live audio and video requires dedicated equipment and trained human operators. If such services are used, the transcription or captions must appear in real-time, they must be synchronised with the content, and they must appear in the same viewport as the live audio and video content."
        },
        {
            name: "Text alternatives (content) #1.3.3 (AAV14)",
            description: "Do you provide a link to a prepared statement or script?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia14.htm"],
            reasoning: "An alternative to providing either a short text alternative or a comprehensive transcription/ captioning service, is to provide a pre-prepared statement or script containing approximately the same information that presented in the audio and video content. In some circumstances (e.g. a live video of a football game) this may not be possible, but when the approximate content is known in advance (e.g. a live video of an opera), this may be a suitable means of providing alternative text. The pre-prepared statement or script may not reflect the live audio and video content precisely and it will not be synchronised with the live content but it should give a good indication of its content and ensure that the information is accessible and can be read by everyone.",
            guidance: "Provide a clearly labelled link to the text alternative immediately before or after the audio and video content. This may be an internal link, if the content is on the same webpage, or it may be a link to a different webpage.\n\nIf the transcript is on a different webpage, provide a link back to the original webpage. If the transcript is on the same webpage, provide a \"back\" or \"go to top\" link to allow the user to return to the main content."
        },
        {
            name: "Audio alternatives #1 (AAV15)",
            description: "Does the existing audio track of a video provide all of the information contained within the video track?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia15.htm"],
            reasoning: "People who are partially-sighted may not be able to see videos very well and people who are blind may not be able to see them at all. If a video has an audio track, this might include a commentary or explanation of what is happening, allowing it to be accessed by people with visual disabilities. If the video does not include a commentary or explanation or does not have an audio track at all, then people with visual disabilities will not be able to determine what is happening in the video.",
            guidance: "Check whether the video has an audio track and, if it does, determine whether the audio track suitably describes what is happening in the video track."
        },
        {
            name: "Audio alternatives #1.1 (AAV16)",
            description: "Do you provide an audio alternative (e.g. a second audio track) which describes the video contents?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia16.htm"],
            reasoning: "People who are partially-sighted may not be able to see videos very well and people who are blind may not be able to see them at all. In such circumstances it is helpful to provide an audio alternative that describes the information in the video. The audio alternative should describe all sounds, setting and setting changes, actions and expressions of any actors as well as any on-screen text that are important to understanding the content.\n\nThe audio alternative should be easy for the user to find. A link to the audio alternative should be located immediately before or after the video content.",
            guidance: "Create an audio track that provides a detailed description of what is happening in the video. The audio should be a common audio format used on the internet, such as MP3.\n\nProvide a clearly labelled link to the audio alternative immediately before or after the video content."
        },
        {
            name: "Audio alternatives #1.1.1 (AAV20)",
            description: "Can the audio alternative be turned on using a control within the content itself or by selecting a preference in the video player?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia20.htm"],
            reasoning: "To make it easier for users to listen to an audio alternative at the same time as watching a video, it is helpful to provide an option within the video player that allow users to replace the audio track of the video with audio alternative. Because the audio alternative will have been synchronised with the video, it prevents it from from obscuring (or being obscured by) any audio that is already in the video (e.g. loud sound effects).",
            guidance: "Some video players allow alternative audio tracks to be selected, either from a button within the webpage content or within the user preferences of the video player. Alternatively, separate players could be used, with each one presenting a different audio track with the same video content."
        },
        {
            name: "Captioning of audio and video content #1 (AAV21)",
            description: "Are captions provided where needed?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia21.htm"],
            reasoning: "Captions are text versions of the dialogue, commentary and other important sounds (e.g. \"dog barks\", \"bell rings\" etc.) in audio and video content. Captions should not be confused with subtitles, which are text versions of dialogue only. Captions allow people who are deaf or heard of hearing to follow what is happening and should be provided for all audio and video content.",
            guidance: "Check whether all audio and video content have captions that include what is being said as well as any important sounds. For live content, captions should be provided in real time."
        },
        {
            name: "Captioning of audio and video content #1.1 (AAV22)",
            description: "Are the captions embedded in the audio or video content?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia22.htm"],
            reasoning: "\"Open captions\" are always visible. By embedding the captions in the audio and video content, people who are deaf or hard of hearing do not have to use special hardware or software to view them. They can play the audio and video content and the captions will appear as text in the video track.",
            guidance: "Open captions that are embedded in the audio and video content are created when the content is first produced. Check that the captions are visible and that they document all dialogue, commentary and important sounds."
        },
        {
            name: "Captioning of audio and video content #1.1.1 (AAV23)",
            description: "Can the captions be enabled by the user on request?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia23.htm"],
            reasoning: "Unlike \"open captions\", which are always visible, \"closed captions\" are enabled by the user on request. They are visible only when needed and can be disabled by people who are not deaf and do not wish to view them. Closed captions require media players to have a control that allows the user to enable or disable them, as well as instructions on how to do this.",
            guidance: "Closed captions can be added to audio and video content after the content has been created. Check that the captions are only visible when the option to view them is selected and that they document all dialogue, commentary and important sounds.\n\nTo add various kinds of audio descriptions or captioning of audio and video content, HTML5 has introduced a new element called the element. This can be used in conjunction with the WebVTT (Web Video Text Tracks), which is an increasingly used format for marking up captions. Captions can be created in a text editor and saved in the .vtt format.\n\nAnother way of creating captions is to use the JavaScript library, Captionator."
        },
        {
            name: "Sign language interpretation of audio and video content #1 (AAV24)",
            description: "Is a sign language interpreter included in the audio and video content where needed?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia24.htm"],
            reasoning: "Sign language is a system of communication using visual gestures and signs. For people who are deaf or hard of hearing, sign language may be their primary and preferred method of communication. Therefore, including a sign language interpreter in video content will allow people who cannot hear to access the content.",
            guidance: "Sign language interpretation is typically embedded in the video content when the content is first produced. Check that the sign language interpreter can be clearly seen. If not, check that the video content can be expanded to fill the screen."
        },
        {
            name: "Audio #1 (AAV25)",
            description: "Do any sounds play automatically for more than 3 seconds?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia25.htm"],
            reasoning: "Audio and video content that plays automatically upon a webpage loading can be very distracting for some users. This is particularly the case for screen reader users who may not be able to hear their screen reader over the audio and video content. It can also cause problems for users who have multiple browsers tabs open as the they may struggle to find which one is playing the audio and video content. There is no problem with playing sounds automatically providing they are no longer than 3 seconds long.",
            guidance: "Load the webpage that includes sounds that play automatically and check that they stop in 3 seconds or less."
        },
        {
            name: "Audio #1.1 (AAV26)",
            description: "Do you provide some way of pausing or stopping the sounds?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia26.htm"],
            reasoning: "Audio and video content that plays automatically upon a webpage loading can be very distracting for some users. By providing a way to pause or stop the sounds completely this gives users control over any potentially distracting content.",
            guidance: "Provide a control that pauses or stops any sounds that play automatically upon a webpage loading. The control should be near the top of the page to make it easier to find, particularly for screen reader users. The control should also be keyboard operable and clearly labelled, e.g. \"Pause the movie\" or \"Stop the audio\"."
        },
        {
            name: "Audio #2 (AAV27)",
            description: "Does any audio contain both speech and non-speech sounds?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia27.htm"],
            reasoning: "Audio and video content often includes both speech and non-speech sounds. For example, a football commentator speaking over the noise of the crowd, or a radio broadcaster speaking over a backing track. If the volume level of the non-speech sounds is too loud, it may make it difficult to hear the speech sounds. By ensuring that any speech is louder than the non-speech sounds, this will ensure that the audio content remains audible.",
            guidance: "The volume of different audio tracks will be determined when the content is first produced.Make sure the foreground speech is 20db louder than the background sound. This makes the speech 4 times louder than the background audio."
        },
        {
            name: "Audio #2.1 (AAV28)",
            description: "Can the speech be easily heard over the non-speech sounds?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia28.htm"],
            reasoning: "Audio and video content often includes both speech and non-speech sounds. For example, a football commentator speaking over the noise of the crowd, or a radio broadcaster speaking over a backing track. If the volume level of the non-speech sounds is too loud, it may make it difficult to hear the speech sounds. By ensuring that any speech is louder than the non-speech sounds, this will ensure that the audio content remains audible.",
            guidance: "The volume of different audio tracks will be determined when the content is first produced.Make sure the foreground speech is 20db louder than the background sound. This makes the speech 4 times louder than the background audio."
        },
        {
            name: "Flashing content #1 (AAV37)",
            description: "Is there any video content on the page that flashes or blinks rapidly?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia37.htm"],
            reasoning: "Some people are very sensitive to flashing, flickering or rapidly moving content. For many they are a distraction but for some they can cause seizures. Seizures can be dangerous, or even life-threatening. Also, some visually impaired users may use screen magnifiers which would increase the size of the flashing content and intensify its impact.",
            guidance: "If possible, avoid using video content on the page that flashes, flickers or blinks rapidy. However, if flashing, flickering or rapidly moving content must be used then try to restrict both the size of the video and rate of movement."
        },
        {
            name: "Flashing content #1.1 (AAV38)",
            description: "Does it flash less than three times a second?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia38.htm"],
            reasoning: "The W3C, and other standards bodies, recommend that flashing content should flash no more than three times a second so as not to cause a seizure in users with photosensitive epilepsy. Some guidelines, such as Section 508, specify no more than two times a second.",
            guidance: "Ensure that there are no more than three flashes during any 1-second period. There are tools available, such as the Photosensitive Epilepsy Analysis Tool (PEAT) that will determine whether a video is likely to cause seizures."
        },
        {
            name: "Flashing content #1.2 (AAV39)",
            description: "Does it blink for less than 5 seconds?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia39.htm"],
            reasoning: "The W3C, and other standards bodies, recommend that blinking content should blink for no more than five seconds at a time so as not to cause a seizure in users with photosensitive epilepsy.",
            guidance: "Ensure that the interval between the start and end of the blinking is less than five seconds. There are tools available, such as the Photosensitive Epilepsy Analysis Tool (PEAT) that will determine whether a video is likely to cause seizures."
        },
        {
            name: "Flashing content #1.3 (AAV40)",
            description: "Can users turn off the flashing or blinking completely?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia40.htm"],
            reasoning: "If flashing, flickering or rapidly moving content must be included, then the user must be given the opportunity to turn the movement off completely.",
            guidance: "Provide a control to turn off moving content completely. This is usually assigned to a keyboard key, such as the Escape key. This allows the user to turn off the moving content as soon as the page has loaded. Alternatively, provide a link that leads to an alternative version of the webpage without moving content. This should be at the very top of the page to allow users to select the option straight away."
        },
        {
            name: "Validation #1 (AAV41)",
            description: "Is the audio and video content free of any validation errors?",
            links: ["http://www.cs.york.ac.uk/hci/webair/mmedia41.htm"],
            reasoning: "There are a number of reasons for ensuring that a webpage validates against formal specifications:\n1. To ensure that the webpage is rendered consistently across different platforms and user-agents. This includes assistive technology, such as screen readers, which rely on the appropriate semantic markup.\n2. To ensure that the webpage is future-proof and does not rely upon the rendering quirks of contemporary web browsers.\n3. To make the webpage easier to maintain. Conforming to a common standard makes websites easier to understand and maintain, either by the original author or someone else.\n4. To demonstrate good practice and professionalism by incorporating good, semantic, well-formed markup.",
            guidance: "The W3C provide a range of validation tools for common web technologies. Webpages can be validated either be entering a URI, uploading a file, or by entering the code directly. Depending on the validity of the code, this may return a number of errors or warnings, along with suggestions on how to fix the problem."
        }
    ],
    "Time Limits": [
        {
            name: "Time-limited content #1 (TIM01)",
            description: "Is there a time limit on the page (in which a user has to do something within a particular time)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/time01.htm"],
            reasoning: "Websites sometimes include functionality that has to be completed within a certain time (e.g. a ticket booking process where tickets must be booked within a particular time or a banking application where users may be logged out if there has been no activity for a particular time). However, some functionality may take longer for people with disabilities to complete. This may be because they struggle to read and interpret the instructions in time or it may be because they are unable to input information quickly enough.",
            guidance: "To ensure that users have adequate time to complete a transaction, provide a way of allowing them to extend the amount of time available or remove the time limit completely. If for some reason the time limit cannot be removed or extended, then the user should be clearly warned about the time limit both at the start of the transaction and before it is about to expire."
        },
        {
            name: "Time-limited content #1.1 (TIM03)",
            description: "Do you allow users to request additional time?",
            links: ["http://www.cs.york.ac.uk/hci/webair/time03.htm"],
            reasoning: "An accessible method of allowing the user to increase the available time is important so that they do not feel under any pressure to complete and therefore potentially make errors.",
            guidance: "To ensure that users have adequate time to complete a transaction, provide a way of allowing them to extend the amount of time available. If for some reason the time limit cannot be extended, then the user should be clearly warned about the time limit both at the start of the transaction and before it is about to expire."
        },
        {
            name: "Time-limited content #1.1.1 (TIM04)",
            description: "Do you allow users to turn the time limit off completely?",
            links: ["http://www.cs.york.ac.uk/hci/webair/time04.htm"],
            reasoning: "An accessible method of allowing the user to completely remove the time limit is important so that they do not feel under any pressure to complete and therefore potentially make errors.",
            guidance: "To ensure that users have adequate time to complete a transaction, provide a way of allowing them to completely remove the limit. If for some reason the time limit cannot be removed then the user should be clearly warned about the time limit both at the start of the transaction and before it is about to expire."
        },
        {
            name: "Time-limited content #1.2 (TIM05)",
            description: "Does this cause the user to be logged out?",
            links: ["http://www.cs.york.ac.uk/hci/webair/time05.htm"],
            reasoning: "Websites sometimes log the use out if there has been no activity for a set period of time. This typically occurs on websites that require the user to log in, such as banking websites or online forums. However, some activities on those websites may take longer for people with disabilities to complete. This may be because they struggle to read and interpret the instructions in time or it may be because they are unable to input information quickly enough.",
            guidance: "To ensure that users have adequate time to complete an activity, first of all provide a way of allowing them to extend the amount of time available or remove the time limit completely. If for some reason the time limit cannot be removed or extended, leading to users being logged out after a period of inactivity, the user must be able to log back in, retrieve their data, and continue the activity."
        },
        {
            name: "Time-limited content #1.2.1 (TIM06)",
            description: "Do you save the user's data, allowing them to log back in again without losing it?",
            links: ["http://www.cs.york.ac.uk/hci/webair/time06.htm"],
            reasoning: "The time allowed by a server in any given session may be set (for whatever reason) ensure that you save any data on the server that has been inputted into the browser so if the user is logged out they can easily continue from where they left off.",
            guidance: "If a user is logged out following a period of inactivity, or even if the browser was closed for whatever reason, the website should save the user's data. Upon logging back in, users should be able to retrieve any data that has already been submitted, allowing them to easily continue from where they left off."
        },
        {
            name: "Updating content #1 (TIM07)",
            description: "Is there any content on the page that updates rapidly (e.g. animated, moving or scrolling content)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/time07.htm"],
            reasoning: "Websites sometimes include content that updates rapidly (e.g. a 'ticker' on a news website that displays the latest headlines or an animated step-by-step guide). Some users may find the rapidly moving content distracting. Others may struggle to read the content in time.",
            guidance: "Provide some means of pausing and restarting rapidly moving content. This may be achieved by including accessible buttons or links or by assigning a keyboard shortcut (e.g. pressing the space bar to pause/restart content)."
        },
        {
            name: "Updating content #1.1 (TIM08)",
            description: "Do you allow users to pause and restart the updating content?",
            links: ["http://www.cs.york.ac.uk/hci/webair/time08.htm"],
            reasoning: "An accessible method of allowing the user to pause and restart the rapidly updating content will ensure that users are able to minimise any distractions and allow them to read the content in their own time.\n\nWebpages that auto-refresh content or redirect automatically to another page should allow enough time for users to orient themselves and understand the page content.",
            guidance: "Provide some means of pausing and restarting rapidly moving content. This may be achieved by including accessible buttons or links or by assigning a keyboard shortcut (e.g. pressing the space bar to pause/restart content).\n\nTo ensure that users are able to orient themselves and understand the page content, it is important that webpages auto-refreshes and redirects do not occur too rapidly. Allow users enough time to interpret the initial page content and to understand where they have been redirected to."
        },
        {
            name: "Updating content #1.1.1 (TIM09)",
            description: "Do you allow users to adjust the timing of updates or turn off updates completely?",
            links: ["http://www.cs.york.ac.uk/hci/webair/time09.htm"],
            reasoning: "An accessible method of allowing the user to adjust the timing of updates or completely turn off the updates is important so that they have complete control over the content and are not distracted or disorientated by rapidly updating content.",
            guidance: "To ensure that users have complete control over rapidly updating content, provide a way of allowing them to adjust the timing of the updates or turn off updates completely. This may be achieved by including accessible buttons or links or by assigning a keyboard shortcut (e.g. pressing the space bar to pause/restart content). If for some reason the updates cannot be turned off completely, then the user should be clearly warned before an update occurs and given the opportunity to delay it."
        }
    ],
    "Navigation": [
        {
            name: "Within pages #1 (NAV01)",
            description: "If layout styles are removed, does the order of the content still make sense?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation01.htm"],
            reasoning: "Some assistive technologies, such as screen readers, render webpages without CSS. This means that elements on the webpage are displayed in the same order that they appear in the code without any positioning or styles applied. It is therefore important to ensure that the order of the conent still makes sense when CSS is disabled. This will help you to understand how the webpage appears to screen reader users and will also allow you to arrange the content in a logical order in case the CSS fails to load for whatever reason.",
            guidance: "One way of viewing a webpage without CSS is to use a text-only browser, such as Lynx. A much easier way is simply to disable CSS in your regular web browser. You can do this either through the browser settings or by installing a development plug-in, such as FIrebug or Web Developer Toolbar."
        },
        {
            name: "Within pages #2 (NAV02)",
            description: "Can users jump to the main content from the top of the webpage?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation02.htm"],
            reasoning: "Some assistive technologies, such as screen readers, process web pages linearly, that is, from left to right, top to bottom. When a webpage includes a heading, title, navigation menu and other common elements, this can be a lot of information to read through before getting to the main content of the webpage. Therefore, it is important to allow users to immediately skip any repeated content and jump straight to the main content.",
            guidance: "Provide a link at the very top of the webpage that allows users to \"Skip to the main content\". This should be an internal link, which link to somewhere else on the same webpage rather than another webpage. As screen reader users move through the page, the skip link should be the very first focusable element. The \"href\" attribute of the skip link should point to the \"id\" of an element on the page, such as another link or even a heading. You can use CSS to to hide the link and only show it when the user tabs to it.\n\nAlso, some screen reader users may navigate webpages by moving through the headings. Because of this it is important to create a hierachy of appropriately-labelled headings."
        },
        {
            name: "Within pages #3 (NAV03)",
            description: "Can users jump to specific sections of the webpage (e.g. using a list of links)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation03.htm"],
            reasoning: "As well as linking to the main content on a webpage, skip links can also be used to jump to different sections of a webpage, e.g. the navigation menu or the search field. This provides users with even greater control over webpage navigation by allowing them to skip blocks of content and jump to important sections of a webpage.",
            guidance: "Provide links at the very top of the webpage that allows users to \"Skip to the main content\". These should be internal links, which link to somewhere else on the same webpage rather than another webpage. As screen reader users move through the page, the skip links should be the very first focusable elements. The \"href\" attribute of the skip links should point to the \"id\" of elements on the page, such as another link or even a heading. You can use CSS to to hide the link and only show it when the user tabs to it.\n\nAlso, some screen reader users may navigate webpages by moving through the headings. Because of this it is important to create a hierachy of appropriately-labelled headings."
        },
        {
            name: "Within pages #4 (NAV04)",
            description: "Can users skip content that is repeated across a number of pages (e.g. a navigation menu)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation04.htm"],
            reasoning: "As well as linking to the main content and other important sections on a webpage, skip links can also be used within a page to skip long blocks of content. Instead of the link being positioned at the very top of the page, in-page skip links should be positioned immediately before the content that is to be skipped. For example, an in-page skip link could be positioned before a navigation menu, particularly if the navigation menu is very long. Similarly, webpage footers often contain a list of links. As this is repeated on every page, an in-page skip link could be positioned before it.",
            guidance: "Provide links immediately before long blocks of content that allows users to skip over them. These should be internal links, which link to somewhere else on the same webpage rather than another webpage. The \"href\" attribute of the skip links should point to the \"id\" of elements on the page after the content to be skipped, such as another link or even a heading. You can use CSS to to hide the link and only show it when the user tabs to it.\n\nAlso, some screen reader users may navigate webpages by moving through the headings. Because of this it is important to create a hierachy of appropriately-labelled headings."
        },
        {
            name: "Within pages #5 (NAV05)",
            description: "Does the order of the webpage content make logical sense when tabbing?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation05.htm"],
            reasoning: "Many users navigate webpages by 'tabbing' through the interactive components (e.g. links, form controls etc.). The tabbing order on the majority of webpages is determined by the order in which the elements appears. It is therefore important to ensure that the order of the elements on a webpage is logical. Some assistive technologies, such as screen readers, render webpages without CSS. This means that elements on the webpage are displayed in the same order that they appear in the code without any positioning or styles applied. It is therefore important to ensure that the order of the content still makes sense when CSS is disabled.\n\nWhere it is not possible to adjust the order of elements in the code, you can use the \"tabindex\" attribute to assign each element to a position in the tab order. When a user tabs through a webpage, the tabbing order will follow the values specific in tabindex. Tabindex values range from 0 to 32767. Any elements with a value higher than 0 will receive focus before elements without a tabindex.",
            guidance: "An easy way to determine the tabbing order on a webpage is simply to tab through it yourself using the Tab key on the keyboard. Make sure the order in which each interactive component gains focus makes logical sense.\n\nTo view a webpage with CSS disabled, which will allow you to see how elements are displayed without any positioning or styles applied, either adjust your browser settings or install a development plug-in, such as FIrebug or Web Developer Toolbar."
        },
        {
            name: "Between pages #1 (NAV06)",
            description: "Do you provide more than one way of locating content within the website (e.g. search, table of contents, related links, site map etc.)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation06.htm"],
            reasoning: "Different users use different methods of locating content within a website. Some may use the search facility to return a list of relevant content, others may prefer to browse a table of contents or a site map. Some may use the 'related links' on a webpage to move through the website, others may prefer to return to the homepage. Users may find one method easier to use than another and so it is important that a website provides multiple ways of locating content.",
            guidance: "Provide more than one way of locating content within a website. A search facility allows users to serach for a particular item of content. A table of contents or a site map allows a user to browse the contents of a website. Related links allow users to move easily from one related page to another."
        },
        {
            name: "Between pages #2 (NAV07)",
            description: "Do you provide information about the user's location within the website (e.g. breadcrumb trails, site map, navigation menu etc.)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation07.htm"],
            reasoning: "When browsing large or complex websites, it can be difficult for a user to identify where they are located within the overall structure of the website.This may result in them being unable to find certain content or they might struggle to navigate back to previous content. It is important therefore to provide some means for the user to identify their location within the website. This is particularly important for blind and partially-sighted users who may rely upon a screen reader.",
            guidance: "On each webpage, provide information about the user's location within the website. This may be as simple as indicating the current page in the navigation menu. Additional information may be provided through site maps or breadcrumb trails. A breadcrumb trail is typically either 'location-based' or 'path-based'. Location-based trails displays the location of the current page within the website's structure. Path-based trails display the webpages that the user has visited before reaching the current page. Breadcrumb trails should be located in the same place on each page."
        },
        {
            name: "Between pages #3 (NAV08)",
            description: "Is the navigation menu consistent between different webpages?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation08.htm"],
            reasoning: "Uniformity of the navigation menu helps the user to know what to expect, especially users who are blind or have low vision or cognitive impairments. If the navigation menu is different from page to page, either in terms of the items it contains, the order of the items, or the appearance of the items, this may confuse and disorientate the user. By ensuring that the navigation menu is used consistently throughout a website, such confusion can be avoided.",
            guidance: "Ensure that the navigation menu is consistent across each page of a website. The same navigation options should appear on each page and they should appear in the same order. The wording of the items should be the same from page to page and the appearance of the items should not change, other than to indicate the current page. The navigation menu should also appear in the same position on each page."
        },
        {
            name: "Between pages #4 (NAV09)",
            description: "Is the text used to describe each webpage used consistently throughout the website?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation09.htm"],
            reasoning: "Uniformity of the text used to describe each webpage (be it in the title of the page or the navigation menu) helps the user to know what to expect, especially users who are blind or have low vision or cognitive impairments. If different text descriptions are used for the same webpage, the user will not be aware that they have already encountered the webpage elsewhere and may not know what to expect from the webpage. By ensuring that descriptions are used consistently throughout a website, such confusion can be avoided.",
            guidance: "Check that the page descriptions (be it in the title of the page or the navigation menu) are used consistently across a website."
        },
        {
            name: "Help #1 (NAV10)",
            description: "Do you provide context-sensitive help (including explanatory text)?",
            links: ["http://www.cs.york.ac.uk/hci/webair/navigation10.htm"],
            reasoning: "Providing help and guidance on how to use a webpage is beneficial to everyone. This is particularly important for forms and other interactive controls. Whilst such components may seem clear and intuitive to the developer, they may be baffling to a user. Context-sensitive help provides users with assistance at the specific point they need it, for example when completing a particular form field.",
            guidance: "Providing context-sensitive help may be as simple as adding explanatory text next to a form field describing what kind of input is required or any additional information that the user may need. If the help information is more detailed, then a link to a separate webpage could be included next to the form field. Furthermore, by opening the link in a new window or tab, this will allow users to get help without losing any information they have already inputted into the form."
        }
    ]
};

if (typeof exports !== "undefined") {
    exports.WebAIR = WebAIR;
}
