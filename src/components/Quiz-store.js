import { writable } from "svelte/store";

const quizes = [
  {
    timestamp: "2013-01-14 05:10:07",
    content_guid: "00CY9",
    inline_content: "",
    content_type: "q",
    content_id: "120855",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "There are four sections of the HR Impact Model. ... considered to be the most client-oriented role?",
    lang: "",
    content_text:
      '{"question":"There are four sections of the HR Impact Model. Which component of the model is considered to be the most client-oriented role?","answers":[{"id":"12085501","is_correct":"0","answer":"Policies and Procedures"},{"id":"12085502","is_correct":"0","answer":"Catalyst"},{"id":"12085503","is_correct":"1","answer":"Consultation"},{"id":"12085504","is_correct":"0","answer":"Programs and Processes"}],"explanation":"Answer option <seq no=\\"c\\" \\/> is correct.\\r\\rThe consultation role is considered to be the most client-oriented role, as HR Professionals in this role help define the overall organizational strategy.\\r\\rAnswer option <seq no=\\"a\\" \\/> is incorrect. Policies and procedures help define the organizational framework, but isn\'t the most client-facing or client-oriented role the HR Professional must play.\\r\\rAnswer option <seq no=\\"b\\" \\/> is incorrect. The HR Professional in the catalyst role processes market demographics, employee attitudes, organizational culture, and how to implement HR best practices.\\r\\rAnswer option <seq no=\\"d\\" \\/> is incorrect. Programs and processes is a client-facing role, but it takes more of a functional position in the organization, such as training and development.\\r\\r<uc:ref>Reference: PHR Exam Prep, Pearson Education, ISBN: 978-0-7897-3677-2. Chapter Three: Strategic Management. Official PHR and SPHR Certification Guide, HR Certification Institute, ISBN: 978-1-586-44149-4, Section III, The US HR Body of Knowledge. <\\/uc:ref> ","special_module_xml":"","case_id":"","synopsis":"","hints":"","short_url":"","key_concepts":"","keywords":"","video_transcripts":"","inline_content_guid":[]}',
  },
  {
    timestamp: "2013-01-14 05:10:07",
    content_guid: "00CYC",
    inline_content: "",
    content_type: "q",
    content_id: "12086",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "You work as a Network Administrator for McRobert...ng commands will you use to accomplish the task?",
    lang: "",
    content_text:
      '{"question":"You work as a Network Administrator for McRobert Inc. You want to format your floppy disk. Assuming that your floppy disk drive name is A, which of the following commands will you use to accomplish the task? ","answers":[{"id":"42196","is_correct":"0","answer":"<seq no=\\"d\\" \\/>CHKDSK \\/F A: "},{"id":"42197","is_correct":"0","answer":"<seq no=\\"c\\" \\/>FORMAT A\\/full "},{"id":"42198","is_correct":"0","answer":"<seq no=\\"b\\" \\/>FORMAT A:\\/\\/ "},{"id":"42199","is_correct":"1","answer":"<seq no=\\"a\\" \\/>FORMAT A:"}],"explanation":"Answer option <seq no=\\"d\\" \\/> is correct. \\r\\n\\r\\nThe <uc:cmd> FORMAT<\\/uc:cmd>  command formats a disk for use with MS-DOS. The <uc:cmd>FORMAT<\\/uc:cmd> command creates a new root directory and file allocation table for the disk. \\r\\n\\r\\n<uc:stx>Syntax:\\r\\n\\r\\nFORMAT &lt;drive name&gt;:<\\/uc:stx> \\r\\n\\r\\n<uc:ref> Reference: TechNet, Contents: \\"MS-DOS 6 Commands: Fasthelp - Format\\"\\r\\n<\\/uc:ref> ","special_module_xml":"","case_id":"","synopsis":"","hints":"","short_url":"","key_concepts":"","keywords":"","video_transcripts":"","inline_content_guid":{"":"00ygR"}}',
  },
  {
    timestamp: "2013-01-14 05:10:07",
    content_guid: "00CYS",
    inline_content: "",
    content_type: "q",
    content_id: "12089",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "You are an administrator of SQL Server 2000 comp...t to the database. Why does the connection fail?",
    lang: "",
    content_text:
      '{"question":"You are an administrator of SQL Server 2000 computer. The SQL Server contains a database, named SalesDB. You have created an .udl file to store the connection configuration for a DTS Package. You want to force the DTS package to use the .udl file to resolve the connections dynamically, and it should be available to network users at run time. You place the .udl file on the network share. Users complain that the DTS package is unable to connect to the database. Why does the connection fail?","answers":[{"id":"42208","is_correct":"1","answer":"<seq no=\\"a\\" \\/> The Always read properties from the UDL file connection property of the DTS package is disabled."},{"id":"42209","is_correct":"0","answer":"<seq no=\\"b\\" \\/> The Always read properties from the UDL file connection property of the DTS package is enabled."},{"id":"42210","is_correct":"0","answer":"<seq no=\\"c\\" \\/> The User DNS entry in the registry is not configured for the connection."},{"id":"42211","is_correct":"0","answer":"<seq no=\\"d\\" \\/> The System DNS entry in the registry is not configured for the connection."}],"explanation":"Answer option <seq no=\\"a\\" \\/> is correct. \\r\\rThe <uc:kwd>Always read properties from the UDL file<\\/uc:kwd> connection property specifies that the DTS package resolves connection information dynamically at run time. If this property is disabled, the connection information is copied from the .udl file into the package. Therefore, the .udl file is not referenced again and only editing the DTS package can modify the connection changes. To resolve the issue, you should copy the .udl file on the network share and enable the Always read properties from the UDL file connection property of the DTS package.\\r\\rAnswer options <seq no=\\"c\\" \\/> and <seq no=\\"d\\" \\/> are incorrect. If you are using a .udl file to store the connection configuration, there is no need to create a system or user DNS entry. Also, creating a registry entry for the connection information will not work, as the registry information will only be available to the local users. Hence, users cannot access the registry of the network computer. \\r\\r<uc:ref> Reference: SQL Book Online Contents: \\"DTS Designer Help\\", \\"Connection Properties\\"<\\/uc:ref>","special_module_xml":"","case_id":"","synopsis":"The Always read properties from the UDL file connection property specifies that the DTS package resolves connection information dynamically at run time. \\r ","hints":"","short_url":"","key_concepts":"","keywords":"","video_transcripts":"","inline_content_guid":{"":"00ygR"}}',
  },
  {
    timestamp: "2013-01-14 05:10:07",
    content_guid: "00CYY",
    inline_content: "",
    content_type: "q",
    content_id: "120900",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "There are seven stages of internal consulting th... one of the seven stages of internal consulting?",
    lang: "",
    content_text:
      '{"question":"There are seven stages of internal consulting that a HR Professional must be familiar with. Which one of the following is not one of the seven stages of internal consulting?","answers":[{"id":"12090001","is_correct":"0","answer":"Exploring the situation"},{"id":"12090002","is_correct":"0","answer":"Implementing"},{"id":"12090003","is_correct":"1","answer":"Executing the project plan"},{"id":"12090004","is_correct":"0","answer":"Developing recommendations"}],"explanation":"Answer option <seq no=\\"C\\" \\/> is correct.\\r\\rExecuting the project plan is not one of the seven stages of internal consulting. Executing is part of the project management lifecycle, but it is not one of the seven stages.\\r\\rAnswer option <seq no=\\"a\\" \\/> is incorrect. Exploring the situation is one of the seven stages of internal consulting.\\r\\rAnswer option <seq no=\\"b\\" \\/> is incorrect. Implementing is the sixth stage of internal consulting.\\r\\rAnswer option <seq no=\\"d\\" \\/> is incorrect.  Developing recommendations is one of the seven stages of internal consulting.\\r\\r<uc:ref>Reference: PHR Exam Prep, Pearson Education, ISBN: 978-0-7897-3677-2. Chapter Three: Strategic Management. Official PHR and SPHR Certification Guide, HR Certification Institute, ISBN: 978-1-586-44149-4, Section III, The US HR Body of Knowledge.<\\/uc:ref> ","special_module_xml":"","case_id":"","synopsis":"","hints":"","short_url":"","key_concepts":"","keywords":"","video_transcripts":"","inline_content_guid":[]}',
  },
  {
    timestamp: "2013-01-14 05:10:07",
    content_guid: "00CyL",
    inline_content: "",
    content_type: "q",
    content_id: "120933",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "You have some selected images in Adobe Bridge wh...d commands will you use to accomplish this task?",
    lang: "",
    content_text:
      '{"question":"You have some selected images in Adobe Bridge which are to be collected in a PDF file and send to the client, so that you may get an approval for your fashion assignment project. Which of the following valid automated commands will you use to accomplish this task?","answers":[{"id":"12093301","is_correct":"0","answer":"Convert to PDF"},{"id":"12093302","is_correct":"1","answer":"Output workspace =&gt; PDF"},{"id":"12093303","is_correct":"0","answer":"PDF Creator"},{"id":"12093304","is_correct":"0","answer":"Image Processor"}],"explanation":"Answer option <seq no=\\"b\\" \\/> is correct.\\r\\rIn Adobe Bridge CS4, the Adobe Media Gallery feature is now known as the Output workspace. This option is used in the Output workspace to export a \'PDF presentation of images\' or create a \'Flash Web gallery\', which can be uploaded to an ftp server. The PDF option in Output workspace offers a user either to create a regular multi-page PDF or a PDF Presentation, which will then be automatically launched into a full-screen slide show when opened. \\r\\rAnswer options <seq no=\\"a\\" \\/> and <seq no=\\"c\\" \\/> are incorrect. These are not valid options in Photoshop CS4.\\r\\rAnswer option <seq no=\\"d\\" \\/> is incorrect. Image Processor cannot be used to convert images in the PDF files. Image Processor works with the multiple image files in a folder in the same way as the batch command. However, while working with Image Processor, there is no need to create an action to start the processing of multiple images with Image Processor. Photoshop Image Processor can convert a set of files to JPEG, PSD, or TIFF format.\\r\\r<uc:ref>Reference: Photoshop CS4 Bible, Contents: \\"Using the Output workspace\\"<\\/uc:ref> ","special_module_xml":"","case_id":"","synopsis":"","hints":"","short_url":"","key_concepts":"","keywords":"","video_transcripts":"","inline_content_guid":[]}',
  },
  {
    timestamp: "2013-01-14 05:10:07",
    content_guid: "00CyO",
    inline_content: "",
    content_type: "q",
    content_id: "120939",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "Which of the following tools in the Camera Raw t...r dust or other unwanted elements from an image?",
    lang: "",
    content_text:
      '{"question":"Which of the following tools in the Camera Raw toolbar is used to remove various defects such as sensor dust or other unwanted elements from an image?","answers":[{"id":"12093901","is_correct":"1","answer":"Spot Removal"},{"id":"12093902","is_correct":"0","answer":"Red-Eye Removal"},{"id":"12093903","is_correct":"0","answer":"Graduated Filter"},{"id":"12093904","is_correct":"0","answer":"Straighten"}],"explanation":"Answer option <seq no=\\"a\\" \\/> is correct.\\r\\rThe Spot Removal tool is used to remove various defects such as sensor dust or other unwanted elements from an image.\\r\\rAnswer option <seq no=\\"b\\" \\/> is incorrect. The Red-Eye Removal tool is used to draw a highlight around the subject\'s iris, and the red is filled in with black.\\r\\rAnswer option <seq no=\\"c\\" \\/> is incorrect. The Graduate Filter is used to apply adjustments to a restricted portion of your photograph.\\r\\rAnswer option <seq no=\\"d\\" \\/> is incorrect. The Straighten tool is used to straight those photographs that are not straight, but slightly bent.\\r\\r<uc:ref>Reference: Photoshop CS4 Bible, Contents: \\"Working with Camera RAW\\"<\\/uc:ref> ","special_module_xml":"","case_id":"","synopsis":"","hints":"","short_url":"","key_concepts":"","keywords":"","video_transcripts":"","inline_content_guid":[]}',
  },
  {
    timestamp: "2013-01-14 05:10:07",
    content_guid: "00Cyr",
    inline_content: "",
    content_type: "q",
    content_id: "120945",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "Which of the following blending modes is availab...end color only to transparent pixels of a layer?",
    lang: "",
    content_text:
      '{"case_id":"","question":"Which of the following blending modes is available only for the painting tools and allows you to add the blend color only to transparent pixels of a layer?","explanation":"Answer option <seq no=\\"a\\" \\/> is correct.\\r\\n \\r\\n The Behind mode is available only for the painting tools. It allows you to add the blend color only to transparent pixels of a layer. It protects the base color and adds new colors to empty areas. This mode works only in layers with Lock Transparency deselected.\\r\\n \\r\\n Answer option <seq no=\\"b\\" \\/> is incorrect. The Clear mode works in the same way as the Eraser tool. It makes every affected pixel transparent according to its original opacity. This mode is available only for the Line tool, the Paint Bucket tool, the Brush tool, and the Pencil tool. It is also available for the Fill command and the Stroke command. This mode cannot be used on the background layer or the layer that has Preserve Transparency checked.\\r\\n \\r\\n Answer option <seq no=\\"c\\" \\/> is incorrect. The Darken mode compares the individual color components of the base color and the blend color, and chooses the color, whichever is darker (Lower value of each component of RGB or higher percent of each value of CMYK), as the resultant color.\\r\\n \\r\\n Answer option <seq no=\\"d\\" \\/> is incorrect. The Multiply mode multiplies the base color by the blend color. The resultant color is always darker than the original blend color. Black color multiplied by any color produces black, and white color multiplied by any color leaves the color unchanged.\\r\\n \\r\\n <uc:ref>Reference: Photoshop CS5 Bible, Contents: \\"Blending modes\\"<\\/uc:ref>","answers":[{"is_correct":"1","answer":"Behind mode","id":"01"},{"is_correct":"0","answer":"Clear mode","id":"02"},{"is_correct":"0","answer":"Darken mode","id":"03"},{"is_correct":"0","answer":"Multiply mode","id":"04"}],"keywords":"","reference":"","key_concepts":"","video_transcripts":"","total_answers":4,"correct_answers":1}',
  },
  {
    timestamp: "2013-01-14 05:10:07",
    content_guid: "00CZ3",
    inline_content: "",
    content_type: "q",
    content_id: "120963",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "You are creating a new site. You are using a Uni...g actions will you take to resolve this problem?",
    lang: "",
    content_text:
      '{"question":"You are creating a new site. You are using a Unix Server. You have provided links to other sites in your site. However, when you click on the links, they do not work. Which of the following actions will you take to resolve this problem?","answers":[{"id":"12096301","is_correct":"0","answer":"Go to Site, select Edit Site, click on the Testing server Category in the Advanced tab, and then set the Server Model to ColdFusion."},{"id":"12096302","is_correct":"0","answer":"Go to Site, select  Edit Site, click on the Testing server Category in the Advanced tab, and then set the Server Model to JSP."},{"id":"12096303","is_correct":"1","answer":"Go to Site, select  Edit Site, click on the Local Info Category in the Advanced tab, and then enable the Case sensitive link checking."},{"id":"12096304","is_correct":"0","answer":"Go to Site, select Edit Site, click on the Local Info Category in the Advanced tab, and then enable the Cache."}],"explanation":"Answer option <seq no=\\"c\\" \\/> is correct.\\r\\rAs you are using a Unix server, it is an important factor that the Local Info settings are configured to case-sensitive link checking. The case-sensitive link checking feature ensures that your links will work on a Unix server where links are case-sensitive. If you are using a Windows or Mac server, this does not matter as much, but it is a good idea to follow the strict naming and linking conventions of a Unix system in case you ever move your site to a different server.\\r\\rAnswer option <seq no=\\"a\\" \\/> is incorrect. Going to Site, selecting Edit Site, clicking on the Testing server Category in the Advanced tab, and then setting the Server Model to ColdFusion will specify the server to be a Coldfusion server.\\r\\rAnswer option <seq no=\\"b\\" \\/> is incorrect. Going to Site, selecting Edit Site, clicking on the Testing server Category in the Advanced tab, and then setting the Server Model to JSP will specify the server to be a JSP server. \\r\\rAnswer option <seq no=\\"d\\" \\/> is incorrect. Going to Site, selecting Edit Site, clicking on the Local Info Category in the Advanced tab, and then enabling the Cache will improve the Assets panel\'s performance and the features which manage the links in a Dreamweaver site.\\r\\rReference: <uc:ref><a href=\\" http:\\/\\/help.adobe.com\\/en_US\\/Dreamweaver\\/10.0_Using\\/WScbb6b82af5544594822510a94ae8d65-7f5fa.html\\"> http:\\/\\/help.adobe.com\\/en_US\\/Dreamweaver\\/10.0_Using\\/WScbb6b82af5544594822510a94ae8d65-7f5fa.html<\\/a>  \\r<\\/uc:ref> ","special_module_xml":"","case_id":"","synopsis":"","hints":"","short_url":"","key_concepts":"","keywords":"","video_transcripts":"","inline_content_guid":[]}',
  },
  {
    timestamp: "2017-02-27 06:42:33",
    content_guid: "00CZg",
    inline_content: "",
    content_type: "q",
    content_id: "120983",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "Your organization is likely to be purchased by a..., and employees. What is environmental scanning?",
    lang: "",
    content_text:
      '{"question":"Your organization is likely to be purchased by a competitor. The Management has asked you, in confidence, to complete environmental scanning to determine the effects of the purchase on your organization\'s culture, customers, and employees. What is environmental scanning?","explanation":"Answer <seq no=\\"b\\" \\/> is correct.\\r\\n\\r\\nEnvironmental scanning requires the HR Professional to review the opportunities and threats that a condition can have on an organization. In this instance the environmental scan is to consider the effects of the organization\'s sale on employee\'s, culture, and customers.\\r\\n\\r\\nAnswer <seq no=\\"a\\" \\/> is incorrect. This is not a good definition of environmental scanning because the number of factors to be considered or the cultural achievability of a change are not required.\\r\\n\\r\\nAnswer <seq no=\\"c\\" \\/> is incorrect. The change need not come from an external source - it could be an internal policy, shift in leadership, or other internal catalyst.\\r\\n\\r\\nAnswer <seq no=\\"d\\" \\/> is incorrect. This isn\'t a valid definition of environmental scanning as this answer doesn\'t consider opportunities or threats that can affect the macro and micro elements in the organization.","answers":[{"is_correct":"0","answer":"Environmental scanning is a review of the cultural achievability of a new project, organizational change, or market influence on at least three factors in an organization.","id":"01"},{"is_correct":"1","answer":"Environmental scanning is a review of the opportunities and threats that a condition may have on an organization.","id":"02"},{"is_correct":"0","answer":"Environmental scanning is an internal review of an external catalyst.","id":"03"},{"is_correct":"0","answer":"Environmental scanning is the process of assessing the effects of an organization change on both macro and micro elements in an organization.","id":"04"}],"correct_ans_str":"B","total_answers":4,"correct_answers":1}',
  },
  {
    timestamp: "2017-02-27 06:42:33",
    content_guid: "00CZH",
    inline_content: "",
    content_type: "q",
    content_id: "120984",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "Organizational functions, according to Fayol, co...organizational functions for strategic planning?",
    lang: "",
    content_text:
      '{"question":"Organizational functions, according to Fayol, conform to one of the six functional areas. Which one of the following is not an area of organizational functions for strategic planning?","explanation":"Answer <seq no=\\"d\\" \\/> is correct.\\r\\n\\r\\nFayol did not include human resource management as one of the six functional areas of an organization. The six areas are: technical activities, sales and marketing, financial activities, security activities, accounting activities, and managerial activities.\\r\\n\\r\\nAnswers <seq no=\\"a\\" \\/>, <seq no=\\"b\\" \\/>, and <seq no=\\"c\\" \\/> are incorrect. Technical activities, financial activities, and sales and marketing are components of the six functional areas.","answers":[{"is_correct":"0","answer":"Technical activities","id":"01"},{"is_correct":"0","answer":"Financial activities","id":"02"},{"is_correct":"0","answer":"Sales and marketing","id":"03"},{"is_correct":"1","answer":"Human resource management","id":"04"}],"correct_ans_str":"D","total_answers":4,"correct_answers":1}',
  },
  {
    timestamp: "2017-03-01 02:53:32",
    content_guid: "00CZh",
    inline_content: "",
    content_type: "q",
    content_id: "120985",
    content_subtype: "0",
    content_icon: "0",
    snippet:
      "Your organization is implementing the balanced s... four perspectives of the balanced score method?",
    lang: "",
    content_text:
      '{"question":"Your organization is implementing the balanced scorecard approach to measuring organizational success. In this balanced scorecard method there are four perspectives you\'ll consider. Which one of the following are the correct four perspectives of the balanced score method?","explanation":"Answer <seq no=\\"c\\" \\/> is correct.\\r\\n\\r\\nThe balance scorecard uses four perspectives as follows: Learning and growth, Business process, Customer, and Financial.\\r\\n\\r\\nAnswers <seq no=\\"a\\" \\/>, <seq no=\\"b\\" \\/>, and <seq no=\\"d\\" \\/> are incorrect. These are not the correct definitions of the balanced score method.","answers":[{"is_correct":"0","answer":"Education, Organizational, Development, and Financial","id":"01"},{"is_correct":"0","answer":"Developmental, Goals, Satisfaction, and Capital","id":"02"},{"is_correct":"1","answer":"Learning and growth, Business process, Customer, and Financial","id":"03"},{"is_correct":"0","answer":"Learning and growth, Management, Customer, and Security","id":"04"}],"correct_ans_str":"C","total_answers":4,"correct_answers":1}',
  },
];

export default quizes;
