const fs = require('fs')
const pug = require('pug')

const distPath = process.argv[3]
const jsonPath = './src/config/'
const baseDir = `${distPath}/SSG_pug-postcss-js_boilerplate/`
const pages = fs.readdirSync(jsonPath)

for (page of pages) {
  console.log(page)
  const data = JSON.parse(fs.readFileSync(`${jsonPath}${page}`, 'utf8'))

  const options = {
    data,
    pretty: true
  }

  console.log(options)

  const compiledFunction = pug.renderFile(`./src/pug/${data.select_template}.pug`, options)
  const outputDestination = `${distPath}/${data.dist}`
  const fileName = data.file_name
  const splitDir = outputDestination.split('/')

  let createDir = baseDir

  for (const dir of splitDir) {
    if (dir !== '.' && dir !== '..' && dir !== 'dist' && dir !== 'SSG_pug-postcss-js_boilerplate') {
      createDir += `${dir}/`
    }

    if (!fs.existsSync(createDir)) {
      fs.mkdirSync(createDir)
    }
  }

  fs.writeFile(`${outputDestination}${fileName}.html`, compiledFunction, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`${outputDestination}${fileName}.html`)
    }
  })
}
console.log('2')
