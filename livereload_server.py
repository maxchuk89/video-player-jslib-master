import sys
try:
    import thread
except ModuleNotFoundError:
    import _thread as thread
sys.modules.setdefault('thread', thread)

from livereload import Server

def main():
    server = Server()
    server.watch("example_min.html")
    server.watch("example_max.html")
    server.watch("player.js")
    server.watch("*.html")
    server.watch("**/*.html")
    server.watch("*.css")
    server.watch("**/*.css")
    server.watch("*.js")
    server.watch("**/*.js")
    server.serve(root=".", host="127.0.0.1", port=5500)

if __name__ == "__main__":
    main()
