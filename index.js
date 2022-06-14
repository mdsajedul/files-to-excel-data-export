

const fs = require('fs')
const ExcelJs = require('exceljs')

const workbook = new ExcelJs.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');
worksheet.columns = [
    {header: 'File Name',key:'fileName',width: 20},
    {header: 'Link',key:'link',width: 20},
    {header: 'Date',key:'date',width: 20},
    {header: 'Title',key:'title',width: 20},
    {header: 'Text',key:'text',width: 20}

]


const exportData = ()=>{
    for(let i = 1; i<= 400; i++){
        try{
             fs.readFile(`./2015/2015 (${i}).txt`,'utf-8',(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
        
                    const lines = data.split(/\r?\n/);
    
                        const  lineData = {
                        fileName: `2015 (${i}).txt`,
                        link: lines[0],
                        date: lines[1],
                        title: lines[2],
                        text: lines[3]
                    }
    
                    worksheet.addRow(lineData)
                   
    
                    workbook.xlsx.writeFile('2015 2801-3200.xlsx').then(data=>{
                        console.log(`File exported: ${i}`)
                    })
                }
            })
    
            
        }
        catch(err){
            console.log(err)
        }
        
    }
}


exportData()

