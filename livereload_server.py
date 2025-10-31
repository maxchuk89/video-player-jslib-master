from livereload import Server

def main():
    server = Server()
    server.watch('*.html')
    server.watch('*.css')
    server.watch('*.js')
    server.serve(root='.', host='127.0.0.1', port=5500, open_url=False)

if __name__ == '__main__':
    main()
