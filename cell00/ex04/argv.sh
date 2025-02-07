if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    count=0
    for arg in "$@"; do
        if [ $count -lt 3 ]; then
            echo "$arg"
        fi
        ((count++))
    done
fi
