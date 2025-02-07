all_files=$(ls)
cnt=0

for i in $all_files
do
    ((cnt=cnt+1))
done

echo $cnt
