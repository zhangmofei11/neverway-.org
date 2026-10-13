import os

ad_head = '''<script async="async" data-cfasync="false" src="https://bauval.org/21/bd884a9292a4f56632d2edab44efde80"></script>
<script data-cfasync="false" src="https://bauval.org/14/deb15d839644915ba29f027ce9fbae93"></script>
<script>
  atOptions = {
    'key' : '77c0764f62fdca10d61a86f5a7cca36b',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script src="https://bauval.org/22/77c0764f62fdca10d61a86f5a7cca36b"></script>'''

ad_body = '''<div style="display: flex; justify-content: center; margin: 20px 0;">
    <div id="container-bd884a9292a4f56632d2edab44efde80"></div>
</div>'''

files = ['index.html']

for f in files:
    if not os.path.exists(f):
        print(f'Skipping: {f}')
        continue
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()

    if '77c0764f62fdca10d61a86f5a7cca36b' not in content:
        content = content.replace('</head>', ad_head + '\n</head>')
        print(f'Added head scripts: {f}')

    if 'container-bd884a9292a4f56632d2edab44efde80' not in content:
        content = content.replace('<footer', ad_body + '\n\n<footer')
        print(f'Added container div: {f}')

    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f'Updated: {f}')