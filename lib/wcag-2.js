var WCAG_2 = {
    "1.1 Text Alternatives": [
        {
            name: "1.1.1 Non-text Content",
            description: "All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed in the guidance section.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-text-equiv-all","http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html"],
            reasoning: "The intent of this Success Criterion is to make information conveyed by non-text content accessible through the use of a text alternative. Text alternatives are a primary way for making information accessible because they can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user. Providing text alternatives allows the information to be rendered in a variety of ways by a variety of user agents. For example, a person who cannot see a picture can have the text alternative read aloud using synthesized speech. A person who cannot hear an audio file can have the text alternative displayed so that he or she can read it. In the future, text alternatives will also allow information to be more easily translated into sign language or into a simpler form of the same language.",
            guidance: "\u2022 Controls, Input: If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.)\n\u2022 Time-Based Media: If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)\n\u2022 Test: If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.\n\u2022 Sensory: If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.\n\u2022 CAPTCHA: If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.\n\u2022 Decoration, Formatting, Invisible: If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.",
            level: 1
        }
    ],
    "1.2 Time\u2013based Media": [
        {
            name: "1.2.1 Audio-only and Video-only (Prerecorded)",
            description: "For prerecorded audio-only and prerecorded video-only media, the items in the guidance section are true, except when the audio or video is a media alternative for text and is clearly labeled as such.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-av-only-alt","http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html"],
            reasoning: "\u2022 This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text alternatives aloud, present them visually, or convert them to braille.\n\u2022 Alternatives for timed-based media that are text based may help some people who have difficulty understanding the meaning of prerecorded video content.\n\u2022 People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.\n\u2022 People who are deaf-blind can read the text in braille.\n\u2022 Additionally, text supports the ability to search for non-text content and to repurpose content in a variety of ways.",
            guidance: "\u2022 Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.\n\u2022 Prerecorded Video-only: Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.",
            level: 1
        },
        {
            name: "1.2.2 Captions (Prerecorded)",
            description: "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-captions","http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html"],
            reasoning: "People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.",
            guidance: "",
            level: 1
        },
        {
            name: "1.2.3 Audio Description or Media Alternative (Prerecorded)",
            description: "An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-audio-desc","http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html"],
            reasoning: "This Success Criterion may help some people who have difficulty watching video or other synchronized media content, including people who have difficulty perceiving or understanding moving images.",
            guidance: "",
            level: 1
        },
        {
            name: "1.2.4 Captions (Live)",
            description: "Captions are provided for all live audio content in synchronized media.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-real-time-captions","http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html"],
            reasoning: "People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.",
            guidance: "",
            level: 2
        },
        {
            name: "1.2.5 Audio Description (Prerecorded)",
            description: "Audio description is provided for all prerecorded video content in synchronized media.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-audio-desc-only","http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html"],
            reasoning: "People who are blind or have low vision as well as those with cognitive limitations who have difficulty interpreting visually what is happening benefit from audio description of visual information.",
            guidance: "",
            level: 2
        },
        {
            name: "1.2.6 Sign Language (Prerecorded)",
            description: "Sign language interpretation is provided for all prerecorded audio content in synchronized media.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-sign","http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-sign.html"],
            reasoning: "People whose human language is a sign language sometimes have limited reading ability. These individuals may not be able to read and comprehend the captions and thus require a sign language interpretation to gain access to the synchronized media content.",
            guidance: "",
            level: 3
        },
        {
            name: "1.2.7 Extended Audio Description (Prerecorded)",
            description: "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-extended-ad","http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-extended-ad.html"],
            reasoning: "People who are blind, people with low vision who cannot see the screen, as well as those with cognitive limitations who have difficulty interpreting visually what is happening, often use audio description of the visual information. However, if there is too much dialogue the audio description is insufficient. Extended audio description can provide the additional information needed to understand the video.",
            guidance: "",
            level: 3
        },
        {
            name: "1.2.8 Media Alternative (Prerecorded)",
            description: "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-text-doc","http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-text-doc.html"],
            reasoning: "People who cannot see well or at all and who also cannot hear well or at all can get access to information in audio-visual presentations.",
            guidance: "",
            level: 3
        },
        {
            name: "1.2.9 Audio-only (Live)",
            description: "An alternative for time-based media that presents equivalent information for live audio-only content is provided.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-live-audio-only","http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-live-audio-only.html"],
            reasoning: "The intent of this Success Criterion is to make information conveyed by live audio, such as video conferencing, live speeches and radio Webcasts, accessible through the use of a text alternative. A live text caption service will enable live audio to be accessible to people who are deaf or hard of hearing, or who cannot otherwise hear the audio. Such services use a trained human operator who listens in to what is being said and uses a special keyboard to enter the text with only a small delay. They are able to capture a live event with a high degree of fidelity, and also to insert notes on any non spoken audio which is essential to understanding the event. A transcript is sometimes a possibility if the live audio is following a set script; but a live caption service is preferred because it plays out at the same pace as the audio itself, and can adapt to any deviations from the script that might occur.",
            guidance: "",
            level: 3
        }
    ],
    "1.3 Adaptable": [
        {
            name: "1.3.1 Info and Relationships",
            description: "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-programmatic","http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html"],
            reasoning: "\u2022 This Success Criterion helps people with different disabilities by allowing user agents to adapt content according to the needs of individual users.\n\u2022 Users who are blind (using a screen reader) benefit when information conveyed through color is also available in text (including text alternatives for images that use color to convey information).\n\u2022 Users who are deaf-blind using braille (text) refreshable displays may be unable to access color-dependent information.",
            guidance: "",
            level: 1
        },
        {
            name: "1.3.2 Meaningful Sequence",
            description: "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-sequence","http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html"],
            reasoning: "This Success Criterion may help people who rely on assistive technologies that read content aloud. The meaning evident in the sequencing of the information in the default presentation will be the same when the content is presented in spoken form.",
            guidance: "",
            level: 1
        },
        {
            name: "1.3.3 Sensory Characteristics",
            description: "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-understanding","http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html"],
            reasoning: "People who are blind and people who have low vision may not be able to understand information if it is conveyed by shape and/or location. Providing additional information other than shape and/or location will allow them to understand the information conveyed by shape and/or alone.",
            guidance: "",
            level: 1
        }
    ],
    "1.4 Distinguishable": [
        {
            name: "1.4.1 Use of Color",
            description: "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-without-color","http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html"],
            reasoning: "\u2022 Users with partial sight often experience limited color vision.\n\u2022 Some older users may not be able to see color well.\n\u2022 Users who have color-blindness benefit when information conveyed by color is available in other visual ways.\n\u2022 People using text-only, limited color, or monochrome displays may be unable to access color-dependent information.\n\u2022 Users who have problems distinguishing between colors can look or listen for text cues.\n\u2022 People using Braille displays or other tactile interfaces can detect text cues by touch.",
            guidance: "",
            level: 1
        },
        {
            name: "1.4.2 Audio Control",
            description: "If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-dis-audio","http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html"],
            reasoning: "\u2022 Individuals who use screen reading technologies can hear the screen reader without other sounds playing. This is especially important for those who are hard of hearing and for those whose screen readers use the system volume (so they cannot turn sound down and screen reader up).\n\u2022 This Success Criterion also benefits people who have difficulty focusing on visual content (including text) when audio is playing.",
            guidance: "",
            level: 1
        },
        {
            name: "1.4.3 Contrast (Minimum)",
            description: "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the items listed in the guidance section.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast","http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"],
            reasoning: "The intent of this Success Criterion is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). For people without color deficiencies, hue and saturation have minimal or no effect on legibility as assessed by reading performance (Knoblauch et al., 1991). Color deficiencies can affect luminance contrast somewhat. Therefore, in the recommendation, the contrast is calculated in such a way that color is not a key factor so that people who have a color vision deficit will also have adequate contrast between the text and the background.",
            guidance: "\u2022 Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;\n\u2022 Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.\n\u2022 Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.",
            level: 2
        },
        {
            name: "1.4.4 Resize text",
            description: "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-scale","http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html"],
            reasoning: "This Success Criterion helps people with low vision by letting them increase text size in content so that they can read it.",
            guidance: "",
            level: 2
        },
        {
            name: "1.4.5 Images of Text",
            description: "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the items listed in the guidance section.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation","http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html"],
            reasoning: "\u2022 People with low vision (who may have trouble reading the text with the authored font family, size and/or color).\n\u2022 People with visual tracking problems (who may have trouble reading the text with the authored line spacing and/or alignment).\n\u2022 People with cognitive disabilities that affect reading.",
            guidance: "\u2022 Customizable: The image of text can be visually customized to the user's requirements;\n\u2022 Essential: A particular presentation of text is essential to the information being conveyed.\n\nNote: Logotypes (text that is part of a logo or brand name) are considered essential.",
            level: 2
        },
        {
            name: "1.4.6 Contrast (Enhanced)",
            description: "The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the items listed in the guidance section.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast7","http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html"],
            reasoning: "The intent of this Success Criterion is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). For people without color deficiencies, hue and saturation have minimal or no effect on legibility as assessed by reading performance (Knoblauch et al., 1991). Color deficiencies can affect luminance contrast somewhat. Therefore, in the recommendation, the contrast is calculated in such a way that color is not a key factor so that people who have a color vision deficit will also have adequate contrast between the text and the background.",
            guidance: "\u2022 Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;\n\u2022 Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.\n\u2022 Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.",
            level: 3
        },
        {
            name: "1.4.7 Low or No Background Audio",
            description: "For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the items in the guidance section is true.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-noaudio","http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-noaudio.html"],
            reasoning: "People who are hard of hearing often have great difficulty separating speech from background sound.",
            guidance: "\u2022 No Background: The audio does not contain background sounds.\n\u2022 Turn Off: The background sounds can be turned off.\n\u2022 20 dB: The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.\n\nNote: Per the definition of \"decibel,\" background sound that meets this requirement will be approximately four times quieter than the foreground speech content.",
            level: 3
        },
        {
            name: "1.4.8 Visual Presentation",
            description: "For the visual presentation of blocks of text, a mechanism is available to achieve the items in the guidance section.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-visual-presentation","http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html"],
            reasoning: "This Success Criterion helps low vision users by letting them see text without distracting presentational features. It lets them configure text in ways that will be easier for them to see by letting them control the color and size of blocks of text.\n\nThis Success Criterion helps people with cognitive, language and learning disabilities perceive text and track their location within blocks of text.\n\u2022 People with some cognitive disabilities can read text better when they select their own foreground and background color combinations.\n\u2022 People with some cognitive disabilities can track their locations more easily when blocks of text are narrow and when they can configure the amount of space between lines and paragraphs.\n\u2022 People with some cognitive disabilities can read text more easily when the spacing between words is regular.",
            guidance: "\u2022 Foreground and background colors can be selected by the user.\n\u2022 Width is no more than 80 characters or glyphs (40 if CJK).\n\u2022 Text is not justified (aligned to both the left and the right margins).\n\u2022 Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.\n\u2022 Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.",
            level: 3
        },
        {
            name: "1.4.9 Images of Text (No Exception)",
            description: "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed. [Note: Logotypes (text that is part of a logo or brand name) are considered essential.]",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-images","http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-images.html"],
            reasoning: "\u2022 People with low vision (who may have trouble reading the text with the authored font family, size and/or color).\n\u2022 People with visual tracking problems (who may have trouble reading the text with the authored line spacing and/or alignment).\n\u2022 People with cognitive disabilities that affect reading.",
            guidance: "",
            level: 3
        }
    ],
    "2.1 Keyboard Accessible": [
        {
            name: "2.1.1 Keyboard",
            description: "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-keyboard-operable","http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html"],
            reasoning: "\u2022 People who are blind (who cannot use devices such as mice that require eye-hand coordination)\n\u2022 People with low vision (who may have trouble finding or tracking a pointer indicator on screen)\n\u2022 Some people with hand tremors find using a mouse very difficult and therefore usually use a keyboard ",
            guidance: "",
            level: 1
        },
        {
            name: "2.1.2 No Keyboard Trap",
            description: "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-trapping","http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html"],
            reasoning: "People who rely on a keyboard or keyboard interface to use the Web including people who are blind and people with physical disabilities.",
            guidance: "",
            level: 1
        },
        {
            name: "2.1.3 Keyboard (No Exception)",
            description: "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-all-funcs","http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-all-funcs.html"],
            reasoning: "The intent of this Success Criterion is to ensure that all content is operable from the keyboard. This is the same as Success Criterion 2.1.1, except that no exceptions are allowed. This does not mean that content where the underlying function requires input that depends on the path of the user's movement and not just the endpoints (excluded from the requirements of 2.1.1) must be made keyboard accessible. Rather, it means that content that uses path-dependent input cannot conform to this Success Criterion and therefore cannot meet Guideline 2.1 at Level AAA.",
            guidance: "",
            level: 3
        }
    ],
    "2.2 Enough Time": [
        {
            name: "2.2.1 Timing Adjustable",
            description: "For each time limit that is set by the content, at least one of the items in the guidance section is true.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-required-behaviors","http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html"],
            reasoning: "\u2022 People with physical disabilities often need more time to react, to type and to complete activities. People with low vision need more time to locate things on screen and to read. People who are blind and using screen readers may need more time to understand screen layouts, to find information and to operate controls. People who have cognitive or language limitations need more time to read and to understand. People who are deaf and communicate in sign language may need more time to read information printed in text (which may be a second language for some).\n\u2022 In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.\n\u2022 People with reading disabilities, cognitive limitations, and learning disabilities who may need more time to read or comprehend information can have additional time to read the information by pausing the content.",
            guidance: "\u2022 Turn off: The user is allowed to turn off the time limit before encountering it; or\n\u2022 Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or\n\u2022 Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, \"press the space bar\"), and the user is allowed to extend the time limit at least ten times; or\n\u2022 Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or\n\u2022 Essential Exception: The time limit is essential and extending it would invalidate the activity; or\n\u2022 20 Hour Exception: The time limit is longer than 20 hours.",
            level: 1
        },
        {
            name: "2.2.2 Pause, Stop, Hide",
            description: "For moving, blinking, scrolling, or auto-updating information, all of the items in the guidance section are true.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-pause","http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html"],
            reasoning: "\u2022 Providing content that stops blinking after five seconds or providing a mechanism for users to stop blinking content allows people with certain disabilities to interact with the Web page.\n\u2022 One use of content that blinks is to draw the visitor's attention to that content. Although this is an effective technique for all users with vision, it can be a problem for some users if it persists. For certain groups, including people with low literacy, reading and intellectual disabilities, and people with attention deficit disorders, content that blinks may make it difficult or even impossible to interact with the rest of the Web page.",
            guidance: "\u2022 Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and\n\u2022 Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.\n\nNote: Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.\nNote: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.",
            level: 1
        },
        {
            name: "2.2.3 No Timing",
            description: "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-no-exceptions","http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html"],
            reasoning: "\u2022 People with physical disabilities often need more time to react, to type and to complete activities. People with low vision need more time to locate things on screen and to read. People who are blind and using screen readers may need more time to understand screen layouts, to find information and to operate controls. People who have cognitive or language limitations need more time to read and to understand. People who are deaf and communicate in sign language may need more time to read information printed in text (which may be a second language for some).\n\u2022 In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.",
            guidance: "",
            level: 3
        },
        {
            name: "2.2.4 Interruptions",
            description: "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-postponed","http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html"],
            reasoning: "\u2022 Individuals with attention deficit disorders can focus on content without distraction.\n\u2022 Individuals with low vision or who use screen readers will not have content updated while they are viewing it (which can lead to discontinuity and misunderstanding if they start reading in one topic and finish in another).",
            guidance: "",
            level: 3
        },
        {
            name: "2.2.5 Re-authenticating",
            description: "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-server-timeout","http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-server-timeout.html"],
            reasoning: "\u2022 This Success Criterion benefits people who may require additional time to complete an activity. People with cognitive limitations may read slowly and require additional time to read and respond to a questionnaire. Users interacting via a screen reader may need extra time to navigate and complete a complicated form. A person with motor impairments or who navigates with an alternative input device may require additional time to navigate through or complete input within a form.\n\u2022 In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.",
            guidance: "",
            level: 3
        }
    ],
    "2.3 Seizures": [
        {
            name: "2.3.1 Three Flashes or Below Threshold",
            description: "Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-seizure-does-not-violate","http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html"],
            reasoning: "Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.",
            guidance: "",
            level: 1
        },
        {
            name: "2.3.2 Three Flashes",
            description: "Web pages do not contain anything that flashes more than three times in any one second period.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-seizure-three-times","http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-three-times.html"],
            reasoning: "Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.",
            guidance: "",
            level: 3
        }
    ],
    "2.4 Navigable": [
        {
            name: "2.4.1 Bypass Blocks",
            description: "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-skip","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html"],
            reasoning: "\u2022 When this Success Criterion is not satisfied, it may be difficult for people with some disabilities to reach the main content of a Web page quickly and easily.\n\u2022 Screen reader users who visit several pages on the same site can avoid having to hear all heading graphics and dozens of navigation links on every page before the main content is spoken.\n\u2022 People who use only the keyboard or a keyboard interface can reach content with fewer keystrokes. Otherwise, they might have to make dozens of keystrokes before reaching a link in the main content area. This can take a long time and may cause severe physical pain for some users.\n\u2022 People who use screen magnifiers do not have to search through the same headings or other blocks of information to find where the content begins each time they enter a new page.\n\u2022 People with cognitive limitations as well as people who use screen readers may benefit when links are grouped into lists",
            guidance: "",
            level: 1
        },
        {
            name: "2.4.2 Page Titled",
            description: "Web pages have titles that describe topic or purpose.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-title","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html"],
            reasoning: "\u2022 This criterion benefits all users in allowing users to quickly and easily identify whether the information contained in the Web page is relevant to their needs.\n\u2022 People with visual disabilities will benefit from being able to differentiate content when multiple Web pages are open.\n\u2022 People with cognitive disabilities, limited short-term memory and reading disabilities also benefit from the ability to identify content by its title.\n\u2022 This criterion also benefits people with severe mobility impairments whose mode of operation relies on audio when navigating between Web pages.",
            guidance: "",
            level: 1
        },
        {
            name: "2.4.3 Focus Order",
            description: "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-focus-order","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html"],
            reasoning: "These techniques benefit keyboard users who navigate documents sequentially and expect the focus order to be consistent with the sequential reading order.\n\u2022 People with mobility impairments who must rely on keyboard access for operating a page benefit from a logical, usable focus order.\n\u2022 People with disabilities that make reading difficult can become disoriented when tabbing takes focus someplace unexpected. They benefit from a logical focus order.\n\u2022 People with visual impairments can become disoriented when tabbing takes focus someplace unexpected or when they cannot easily find the content surrounding an interactive element.\n\u2022 Only a small portion of the page may be visible to an individual using a screen magnifier at a high level of magnification. Such a user may interpret a field in the wrong context if the focus order is not logical.",
            guidance: "",
            level: 1
        },
        {
            name: "2.4.4 Link Purpose (In Context)",
            description: "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-refs","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html"],
            reasoning: "\u2022 This Success Criterion helps people with motion impairment by letting them skip links that they are not interested in, avoiding the keystrokes needed to visit the referenced content and then returning to the current content.\n\u2022 People with cognitive limitations will not become disoriented by multiple means of navigation to and from content they are not interested in.\n\u2022 People with visual disabilities will be able to determine the purpose of a link by exploring the link's context.",
            guidance: "",
            level: 1
        },
        {
            name: "2.4.5 Multiple Ways",
            description: "More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-mult-loc","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html"],
            reasoning: "\u2022 Providing an opportunity to navigate sites in more than one manner can help people find information faster. Users with visual impairments may find it easier to navigate to the correct part of the site by using a search, rather than scrolling through a large navigation bar using a screen magnifier or screen reader. A person with cognitive disabilities may prefer a table of contents or site map that provides an overview of the site rather than reading and traversing through several Web pages. Some users may prefer to explore the site in a sequential manner, moving from Web page to Web page in order to best understand the concepts and layout.\n\u2022 Individuals with cognitive limitations may find it easier to use search features than to use a hierarchical navigation scheme that be difficult to understand.",
            guidance: "",
            level: 2
        },
        {
            name: "2.4.6 Headings and Labels",
            description: "Headings and labels describe topic or purpose.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-descriptive","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html"],
            reasoning: "\u2022 Descriptive headings are especially helpful for users who have disabilities that make reading slow and for people with limited short-term memory. These people benefit when section titles make it possible to predict what each section contains.\n\u2022 People who have difficulty using their hands or who experience pain when doing so will benefit from techniques that reduce the number of keystrokes required to reach the content they need.\n\u2022 This Success Criterion helps people who use screen readers by ensuring that labels and headings are meaningful when read out of context, for example, in a Table of Contents, or when jumping from heading to heading within a page.\n\u2022 This Success Criterion may also help users with low vision who can see only a few words at a time.",
            guidance: "",
            level: 2
        },
        {
            name: "2.4.7 Focus Visible",
            description: "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-focus-visible","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html"],
            reasoning: "\u2022 This Success Criterion helps anyone who relies on the keyboard to operate the page, by letting them visually determine the component on which keyboard operations will interact at any point in time.\n\u2022 People with attention limitations, short term memory limitations, or limitations in executive processes benefit by being able to discover where the focus is located.",
            guidance: "",
            level: 2
        },
        {
            name: "2.4.8 Location",
            description: "Information about the user's location within a set of Web pages is available.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-location","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-location.html"],
            reasoning: "This Success Criterion is helpful for people with a short attention span who may become confused when following a long series of navigation steps to a Web page. It is also helpful when a user follows a link directly to a page deep within a set of Web pages and needs to navigate that Web site to understand the content of that page or to find more related information.",
            guidance: "",
            level: 3
        },
        {
            name: "2.4.9 Link Purpose (Link Only)",
            description: "A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-link","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html"],
            reasoning: "\u2022 This Success Criterion helps people with motion impairment by letting them skip Web pages that they are not interested in, avoiding the keystrokes needed to visit the referenced content and then return to the current content.\n\u2022 People with cognitive limitations will not become disoriented by extra navigation to and from content they are not interested in.\n\u2022 People with visual disabilities will benefit from not losing their place in the content when they return to the original page. The screen reader's list of links is more useful for finding information because the target of the links are described.",
            guidance: "",
            level: 3
        },
        {
            name: "2.4.10 Section Headings",
            description: "Section headings are used to organize the content. [Note: \"Heading\" is used in its general sense and includes titles and other ways to add a heading to different types of content.]",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-headings","http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html"],
            reasoning: "\u2022 People who are blind will know when they have moved from one section of a Web page to another and will know the purpose of each section.\n\u2022 People with some learning disabilities will be able to use the headings to understand the overall organization of the page content more easily.\n\u2022 People who navigate content by keyboard will be able to jump the focus from heading to heading, enabling them to find quickly content of interest.\n\u2022 In pages where content in part of the page updates, headings can be used to quickly access updated content.",
            guidance: "",
            level: 3
        }
    ],
    "3.1 Readable": [
        {
            name: "3.1.1 Language of Page",
            description: "The default human language of each Web page can be programmatically determined.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-doc-lang-id","http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html"],
            reasoning: "This Success Criterion helps:\n\u2022 people who use screen readers or other technologies that convert text into synthetic speech;\n\u2022 people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets or decoding words;\n\u2022 people with certain cognitive, language and learning disabilities who use text-to-speech software\n\u2022 people who rely on captions for synchronized media.",
            guidance: "",
            level: 1
        },
        {
            name: "3.1.2 Language of Parts",
            description: "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-other-lang-id","http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html"],
            reasoning: "This Success Criterion helps:\n\u2022 people who use screen readers or other technologies that convert text into synthetic speech;\n\u2022 people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets, decoding words, and understanding words and phrases;\n\u2022 people with certain cognitive, language and learning disabilities who use text-to-speech software;\n\u2022 people who rely on captions to recognize language changes in the soundtrack of synchronized media content.",
            guidance: "",
            level: 2
        },
        {
            name: "3.1.3 Unusual Words",
            description: "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-idioms","http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-idioms.html"],
            reasoning: "This Success Criterion may help people with cognitive, language and learning disabilities who:\n\u2022 have difficulty decoding words\n\u2022 have difficulty understanding words and phrases\n\u2022 have difficulty using context to aid understanding\nIt would also help people with visual disabilities who:\n\u2022 lose context when zoomed-in with a screen magnifier",
            guidance: "",
            level: 3
        },
        {
            name: "3.1.4 Abbreviations",
            description: "A mechanism for identifying the expanded form or meaning of abbreviations is available.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-located","http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-located.html"],
            reasoning: "This Success Criterion may help people who:\n\u2022 have difficulty decoding words;\n\u2022 rely on screen magnifiers (magnification may reduce contextual cues);\n\u2022 have limited memory;\n\u2022 have difficulty using context to aid understanding.\n\nAbbreviations may confuse some readers in different ways:\n\u2022 Some abbreviations do not look like normal words and cannot be pronounced according to the usual rules of the language. For example, the English word \"room\" is abbreviated as \"rm,\" which does not correspond to any English word or phoneme. The user has to know that \"rm\" is an abbreviation for the word \"room\" in order to say it correctly.\n\u2022 Sometimes, the same abbreviation means different things in different contexts. For example, in the English sentence \"Dr. Johnson lives on Boswell Dr.,\" the first \"Dr.\" is an abbreviation for \"Doctor\" and the second instance is an abbreviation for the word \"Drive\" (a word that means \"street\"). Users must be able to understand the context in order to know what the abbreviations mean.\n\u2022 Some acronyms spell common words but are used in different ways. For example, \"JAWS\" is an acronym for a screen reader whose full name is \"Job Access with Speech.\" It is also a common English word referring to the part of the mouth that holds the teeth. The acronym is used differently than the common word.\n\u2022 Some acronyms sound like common words but are spelled differently. For example, the acronym for Synchronized Multimedia Integration Language, S M I L, is pronounced like the English word \"smile.\"\n\nIt would also help people with visual disabilities who:\n\u2022 Lose context when zoomed-in with a screen magnifier",
            guidance: "",
            level: 3
        },
        {
            name: "3.1.5 Reading Level",
            description: "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-supplements","http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-supplements.html"],
            reasoning: "This Success Criterion may help people who:\n\u2022 have difficulty comprehending and interpreting written language (e.g., articles, instructions, or newspapers in text or braille), for the purpose of obtaining general knowledge or specific information",
            guidance: "",
            level: 3
        },
        {
            name: "3.1.6 Pronunciation",
            description: "A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-pronunciation","http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-pronunciation.html"],
            reasoning: "This Success Criterion may help people who:\n\u2022 have difficulty decoding words\n\u2022 have difficulty using context to aid understanding\n\u2022 use technologies that read the words aloud",
            guidance: "",
            level: 3
        }
    ],
    "3.2 Predictable": [
        {
            name: "3.2.1 On Focus",
            description: "When any component receives focus, it does not initiate a change of context.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-receive-focus","http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html"],
            reasoning: "This Success Criterion helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.",
            guidance: "",
            level: 1
        },
        {
            name: "3.2.2 On Input",
            description: "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-unpredictable-change","http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html"],
            reasoning: "\u2022 This Success Criterion helps users with disabilities by making interactive content more predictable. Unexpected changes of context can be so disorienting for users with visual disabilities or cognitive limitations that they are unable to use the content.\n\u2022 Individuals who are unable to detect changes of context are less likely to become disoriented while navigating a site. For example: Individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.\n\u2022 Some individuals with low vision, with reading and intellectual disabilities, and others who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.",
            guidance: "",
            level: 1
        },
        {
            name: "3.2.3 Consistent Navigation",
            description: "Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-consistent-locations","http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html"],
            reasoning: "Ensuring that repeated components occur in the same order on each page of a site helps users become comfortable that they will able to predict where they can find things on each page. This helps users with cognitive limitations, users with low vision, users with intellectual disabilities, and also those who are blind.",
            guidance: "",
            level: 2
        },
        {
            name: "3.2.4 Consistent Identification",
            description: "Components that have the same functionality within a set of Web pages are identified consistently.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-consistent-functionality","http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html"],
            reasoning: "\u2022 People who learn functionality on one page on a site can find the desired functions on other pages if they are present.\n\u2022 When non-text content is used in a consistent way to identify components with the same functionality, people with difficulty reading text or detecting text alternatives can interact with the Web without depending on text alternatives.\n\u2022 People who depend on text alternatives can have a more predictable experience. They can also search for the component if it has a consistent label on different pages.",
            guidance: "",
            level: 2
        },
        {
            name: "3.2.5 Change on Request",
            description: "Changes of context are initiated only by user request or a mechanism is available to turn off such changes.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-no-extreme-changes-context","http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html"],
            reasoning: "\u2022 Individuals who are unable to detect changes of context or may not realize that the context has changed are less likely to become disoriented while navigating a site. For example: individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected. \n\u2022 Some individuals with low vision, with reading and intellectual disabilities, and who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.\n\u2022 People with certain cognitive limitations do not get confused if automatic redirects are performed by the Web server instead of the browser.",
            guidance: "",
            level: 3
        }
    ],
    "3.3 Input Assistance": [
        {
            name: "3.3.1 Error Identification",
            description: "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-identified","http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"],
            reasoning: "\u2022 Providing information about input errors in text allows users who are blind or colorblind to perceive the fact that an error occurred.\n\u2022 This Success Criterion may help people with cognitive, language, and learning disabilities who have difficulty understanding the meaning represented by icons and other visual cues.",
            guidance: "",
            level: 1
        },
        {
            name: "3.3.2 Labels or Instructions",
            description: "Labels or instructions are provided when content requires user input.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-cues","http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"],
            reasoning: "\u2022 When label elements are associated with input elements the label is spoken by screen readers when the field receives focus and users with impaired motor control are helped by a larger clickable area for the control, since clicking on the label or the control will activate the control.\n\u2022 Field labels located in close proximity to the associated field assist users of screen magnifiers because the field and label are more likely to visible within the magnified area of the page.\n\u2022 Providing examples of expected data formats help users with cognitive, language and learning disabilities to enter information correctly.\n\u2022 Clearly identifying required fields prevents a keyboard only user from submitting an incomplete form and having to navigate the redisplayed form to find the uncompleted field and provide the missing information.",
            guidance: "",
            level: 1
        },
        {
            name: "3.3.3 Error Suggestion",
            description: "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-suggestions","http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"],
            reasoning: "Providing information about how to correct input errors allows users who have learning disabilities to fill in a form successfully. Users who are blind or have impaired vision understand more easily the nature of the input error and how to correct it. People with motion impairment can reduce the number of times they need to change an input value.",
            guidance: "",
            level: 2
        },
        {
            name: "3.3.4 Error Prevention (Legal, Financial, Data)",
            description: "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the items in the guidance section is true.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-reversible","http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html"],
            reasoning: "Providing safeguards to avoid serious consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.",
            guidance: "\u2022 Reversible: Submissions are reversible.\n\u2022 Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.\n\u2022 Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.",
            level: 2
        },
        {
            name: "3.3.5 Help",
            description: "Context-sensitive help is available.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-context-help","http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-context-help.html"],
            reasoning: "\u2022 Assistance for text input helps individuals with writing disabilities and people with reading and intellectual disabilities who often have difficulty writing text in forms or other places that need text input.\n\u2022 Additionally, these kinds of assistance help people who are aging and have the same difficulty in text input and/or mouse operation.",
            guidance: "",
            level: 3
        },
        {
            name: "3.3.6 Error Prevention (All)",
            description: "For Web pages that require the user to submit information, at least one of the items in the guidance section is true.",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-reversible-all","http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible-all.html"],
            reasoning: "Providing safeguards to avoid consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.",
            guidance: "\u2022 Reversible: Submissions are reversible.\n\u2022 Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.\n\u2022 Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.",
            level: 3
        }
    ],
    "4.1 Compatible": [
        {
            name: "4.1.1 Parsing",
            description: "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. [Note: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.]",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-parses","http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html"],
            reasoning: "Ensuring that Web pages have complete start and end tags and are nested according to specification helps ensure that assistive technologies can parse the content accurately and without crashing.",
            guidance: "",
            level: 1
        },
        {
            name: "4.1.2 Name, Role, Value",
            description: "For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. [Note: This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.]",
            links: ["http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-rsv","http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"],
            reasoning: "Providing role, state, and value information on all user interface components enables compatibility with assistive technology, such as screen readers, screen magnifiers, and speech recognition software, used by people with disabilities.",
            guidance: "",
            level: 1
        }
    ]
};

if (typeof exports !== "undefined") {
    exports.WCAG_2 = WCAG_2;
}
