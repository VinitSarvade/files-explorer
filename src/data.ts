export type Type =  'dir' | 'file';

export interface Content {
  file: string;
  type: Type;
  contents?: Content[];
}

export interface Data {
  contents: Content[]
}

export const data: Data = {
  "contents": [
    {
      "file": "test",
      "type": "dir",
      "contents": [
        {
          "file": "for",
          "type": "dir",
          "contents": [
            {
              "file": "groovy",
              "type": "dir",
              "contents": [
                {
                  "file": "afile.groovy",
                  "type": "file"
                }
              ]
            },
            {
              "file": "insidefor.txt",
              "type": "file"
            },
            {
              "file": "insidefor2.txt",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "file": "woo.html",
      "type": "file"
    }
  ]
};
