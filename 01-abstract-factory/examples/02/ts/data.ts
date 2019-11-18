

const DocumentData = {
  type: "document",
  nodes: [
    {
      type: "header",
      level: 1,
      nodes: [
        {
          type: "text",
          text: "An Example of a Rich Text Document"
        }
      ],
    },
    {
      type: "paragraph",
      nodes: [
        {
          type: "text",
          text: 'This demonstrate some rich text formats of:'
        },
        {
          type: "bold",
          nodes: [
            {
              type: "text",
              text: "bold"
            }
          ]
        },
        {
          type: "text",
          text: ", "
        },
        {
          type: "italic",
          nodes: [
            {
              type: "text",
              text: "italic"
            }
          ]
        },
        {
          type: "text",
          text: ", and "
        },
        {
          type: "underline",
          nodes: [
            {
              type: "text",
              text: "underline",
            }
          ]
        },
        {
          type: "text",
          text: ", and "
        },
        {
          type: "strikethrough",
          nodes: [
            {
              type: "text",
              text: "strikethrough",
            }
          ]
        },
        {
          type: "text",
          text: "."
        },
      ]
    }
  ]
}

export default DocumentData;
