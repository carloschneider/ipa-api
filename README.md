# ipa-api

## About

**IPA: International Phonetic Alphabet**

This API was created to web scraping the Collins Dictionary and return the phonetics of a word

## How to use

`https://ipa-rest.herokuapp.com/:word`

## Example

`https://ipa-rest.herokuapp.com/hello`

Should return:

```json
{
  "pronunciation": "heloʊ",
  "url": "https://www.collinsdictionary.com/dictionary/english/hello"
}
```
