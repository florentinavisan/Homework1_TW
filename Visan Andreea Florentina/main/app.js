
const InvalidType = new Error('InvalidType');

const rle = (text, compress = true) => 
{

  if(typeof text !== 'string' && !(text instanceof String))
    throw InvalidType;

  if (compress === true)
    return RLECompression(text);
  else
    return RLEDecompression(text);

}

function RLECompression(text) 
{
  compressText = '';
  ct = 1;
  for (let i = 0; i < text.length; i++) 
  {
    if (text[i] === text[i + 1]) 
    {
      ct++;
    }
    else
     {
      compressText += text[i] + ct;
      ct = 1;
    }
  }
  return compressText;
}

function RLEDecompression(text) 
{
  decompressText = '';
  for (var i = 1; i < text.length; i = i + 2) 
  {
    letter = text[i - 1];
    for (var j = 0; j < parseInt(text[i]); j++)
      decompressText += letter;
  }
  return decompressText;
}

module.exports = rle

