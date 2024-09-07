import pandas as pd
from io import StringIO
f= open('xmll.txt', 'r')
filer  = f.read()

df = pd.read_xml(StringIO(filer))
print(df.to_csv('EU_patentsdata.csv'))
