{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/row-formatting.schema.json",
  "additionalRowClass": {
    "operator": ":",
    "operands": [
      {
        "operator": "==",
        "operands": [
          "[$Stage]",
          "Cancel"
        ]
      },
      "sp-field-strikeThrough",
      {
        "operator": ":",
        "operands": [
          {
            "operator": "!=",
            "operands": [
              "[$HLActive]",
              true
            ]
          },
          "sp-css-backgroundColor-BgLightGray sp-css-color-LightGrayFont",
          {
            "operator": ":",
            "operands": [
              {
                "operator": "<=",
                "operands": [
                  {
                    "operator": "Date()",
                    "operands": [
                      {
                        "operator": "toDateString()",
                        "operands": [
                          {
                            "operator": "Date()",
                            "operands": [
                              "[$ExpireDate]"
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "operator": "Date()",
                    "operands": [
                      {
                        "operator": "toDateString()",
                        "operands": [
                          {
                            "operator": "Date()",
                            "operands": [
                              "@now"
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "sp-css-backgroundColor-BgRed sp-css-color-WhiteText",
              {
                "operator": ":",
                "operands": [
                  {
                    "operator": "<=",
                    "operands": [
                      "[$RemainDate]",
                      5
                    ]
                  },
                  "sp-css-backgroundColor-BgBrown sp-css-color-WhiteText",
                  {
                    "operator": ":",
                    "operands": [
                      {
                        "operator": "==",
                        "operands": [
                          "[$Stage]",
                          "Complete"
                        ]
                      },
                      "sp-css-backgroundColor-BgMintGreen sp-css-color-MintGreenFont",
                      ""
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}