echo "Fetching all markdown files..."
$markdownFiles = Get-ChildItem .\*.md -Recurse -Force
echo "Fetched all markdown files."
echo "Converting markdown files to HTML..."
foreach ($file in $markdownFiles)
{
  $fullName = $file.FullName
  $name = $file.Name
  $htmlFileName = $name -replace ".md", ".html"
  $fullNameSplit = $fullName -split "\\"
  $folder = ""
  if ($fullNameSplit.Contains("architektura 1"))
  {
    $folder = "architektura 1"
  }
  elseif ($fullNameSplit.Contains("architektura 2"))
  {
    $folder = "architektura 2"
  }
  pandoc $fullName -f markdown -t html -o  .\html\$folder\$htmlFileName
}
echo "Converted all files."